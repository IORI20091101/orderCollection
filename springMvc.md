## springMvc向jsp页面传参数

###### 建议使用方式返回Model
```
/**
 *在参数列表中直接定义Model，model.addAttribute("p", person);
 *把参数值放到request类里面去，建议使用
 * @param map
 * @return
 * @throws Exception
 */
@RequestMapping("/toPerson6.do")
public String toPerson6(Model model) throws Exception {
    Person person = new Person();
    person.setName("jerome");
    person.setAge(22);
    person.setAddress("nanan");
    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
    Date date = format.parse("2012-12-21");
    person.setBirthday(date);
    //把参数值放到request类里面去
    model.addAttribute("p", person);
    return "jsp/index";
}
```

###### 通过返回ModelAndView
```

/**
 * 方法的返回值采用ModelAndView， new ModelAndView("index", map);，
 * 相当于把结果数据放到request里面
 * @return
 * @throws Exception
 */
@RequestMapping("/toPerson4.do")
public ModelAndView toPerson4() throws Exception{
    Person person = new Person();
    person.setName("jerome");
    person.setAge(22);
    person.setAddress("nanan");
    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
    Date date = format.parse("2012-12-21");
    person.setBirthday(date);

    Map<String,Object> map = new HashMap<String, Object>();
    map.put("p", person);
    return new ModelAndView("jsp/index",map);
}

```

###### 返回Map
```
/**
 * 直接在方法的参数列表中来定义Map，这个Map即使ModelAndView里面的Map
 * 由视图解析器统一处理，统一走ModelAndView的接口
 * 也不建议使用
 * @param map
 * @return
 * @throws Exception
 */
@RequestMapping("/toPerson5.do")
public String toPerson5(Map<String,Object> map) throws Exception{
    Person person = new Person();
    person.setName("jerome");
    person.setAge(22);
    person.setAddress("nanan");
    SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
    Date date = format.parse("2012-12-21");
    person.setBirthday(date);

    map.put("p", person);
    return "jsp/index";
}
```


###### 异步ajax 推荐方法一
```
/**
 * 直接在参数的列表上定义PrintWriter,out.wrote(result);
 * 把结果写到页面，建议使用
 * @param name
 * @param out
 */
@RequestMapping("/ajax1.do")
public void ajax1(String name, PrintWriter out) {
    String result="hello1 "+name;
    out.write(result);
}
```


###### 异步ajax 方法不推荐
```
/**
 * ajax的请求返回值类型应该是void，参数列表里直接定义HttpServletResponse，
 * 获得ProntWriter的类，最后可把结果写到页面
 * 不建议使用
 * @param name
 * @param response
 */
@RequestMapping("/ajax.do")
public void ajax(String name, HttpServletResponse response) {
    String result = "hello " + name;
    try {
        response.getWriter().write(result);
    } catch (IOException e) {
        e.printStackTrace();
    }
    return "redirect:/test1/toForm.do";

}
```



## springMvc 接受前端传来的参数


###### 接受path参数
```

@RequestMapping(value= " /{id}/{str} " )
 public ModelAndView helloWorld(@PathVariable String id, @PathVariable String str) {
 System.out.println(id);
 System.out.println(str);
 return new ModelAndView( " /helloWorld " );
}
```




###### 用@ModelAttribute注解获取POST请求的FORM表单数据

jsp
```
<form method="post" action="hao.do">
 a: <input id="a" type="text" name="a"/>
 b: <input id="b" type="text" name="b"/>
 <input type="submit" value="Submit" />
 </form>
```
java pojo
```
public class Pojo{
private String a;
private int b;
```

```
@RequestMapping(method= RequestMethod.POST)
 public String processSubmit(@ModelAttribute( " pojo " ) Pojo pojo) {
 return " helloWorld " ;
 }
}
```


###### 直接用HttpServletRequest获取
```
@RequestMapping(method= RequestMethod.GET)
 public String get(HttpServletRequest request, HttpServletResponse response) {
 System.out.println(request.getParameter( " a " ));
 return " helloWorld " ;
}
```




###### 用注解@RequestParam绑定请求参数a到变量a
```
@RequestMapping(value= " /requestParam " , method= RequestMethod.GET)
 public String setupForm(@RequestParam( " a " ) String a, ModelMap model) {
 System.out.println(a);
 return " helloWorld " ;}
```

###### 如果post请求请求头是application/x-www-form-urlencoded都可以取到值，但如果是application/json格式可以通过这两种方法取
##### 方法一 可以取到但是不够优雅
```
@RequestMapping(value= " /requestParam " , method= RequestMethod.POST)
 BufferedReader reader=request.getReader();
        StringBuilder builder=new StringBuilder();
        String a;
        while ((a=reader.readLine()) != null ){
            builder.append(a);
        }
        // DEBUG
        //System.out.println(builder.toString());
        String req = URLDecoder.decode(builder.toString(), "UTF-8");


        System.out.println((JSONObject) JSONObject.parseObject(req));
}
```

###### 方法二 自定义一个注解
### 第一步自定义注解
```
package com.longdai.core;


import java.lang.annotation.*;

/**
 * Created by sundongzhi on 15/11/20.
 */
@Documented
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.PARAMETER)
public @interface JsonArg {

    public String value() default "";

}
```
###第二步HandlerMethodArgumentResolver
```
package com.longdai.core;

import org.apache.commons.io.IOUtils;
import org.springframework.core.MethodParameter;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

import com.jayway.jsonpath.JsonPath;


public class JsonPathArgumentResolver implements HandlerMethodArgumentResolver{

    private static final String JSONBODYATTRIBUTE = "JSON_REQUEST_BODY";
    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.hasParameterAnnotation(JsonArg.class);
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        String body = getRequestBody(webRequest);
        String arg = parameter.getParameterAnnotation(JsonArg.class).value();
        if (StringUtils.isEmpty(arg)) {
            arg = parameter.getParameterName();
        }
        Object val = JsonPath.parse(body).read(arg);
        return val;
    }

    private String getRequestBody(NativeWebRequest webRequest){
        HttpServletRequest servletRequest = webRequest.getNativeRequest(HttpServletRequest.class);

        String jsonBody = (String) webRequest.getAttribute(JSONBODYATTRIBUTE, NativeWebRequest.SCOPE_REQUEST);
        if (jsonBody==null){
            try {
                jsonBody = IOUtils.toString(servletRequest.getInputStream());
                webRequest.setAttribute(JSONBODYATTRIBUTE, jsonBody, NativeWebRequest.SCOPE_REQUEST);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        return jsonBody;
    }

}
```

### 第三步spring-mvc中声明如果是基于注解的配置需要下面的addArgumentResolvers配置方法

```
<mvc:annotation-driven>
    <mvc:argument-resolvers>
        <beans:bean class="com.redcollar.bl.commons.extension.JsonArgumentResolver" />
    </mvc:argument-resolvers>
</mvc:annotation-driven>




@Configuration
public class StaticResource extends WebMvcConfigurerAdapter {


    private static final String[] RESOURCE_LOCATIONS = {
            "classpath:/resources/",
            "classpath:/WebRoot/",};
    @Autowired
    private Environment environment;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {


        if (!registry.hasMappingForPattern("/**")) {
            registry.addResourceHandler("/**").addResourceLocations(
                    RESOURCE_LOCATIONS);
        }

        //如果是本地调试就用代码连接一下映射
        if (environment.getProperty("app.profile").equals("dohko")) {
            String currentPath = this.getClass().getResource("/").getPath();
            String projectPath = currentPath + "../../WebRoot/";
            System.out.println(projectPath);

            registry.addResourceHandler("/vendor/**").addResourceLocations("file://" + projectPath + "/vendor/");

            registry.addResourceHandler("/**").addResourceLocations("file://" + projectPath + "/dist/");
        }
        System.out.println(this.getClass().getResource("/").getPath());
        //如果本地
    }

//    @Override
//    public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
//        configurer.defaultContentType(MediaType.TEXT_HTML);
////        configurer.ignoreAcceptHeader(true);
//        super.configureContentNegotiation(configurer);
//    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        //设置默认页面
//        registry.addViewController("/").setViewName("forward:/index.html");
//        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
        super.addViewControllers(registry);
    }


    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        argumentResolvers.add(new JsonPathArgumentResolver());
        super.addArgumentResolvers(argumentResolvers);
    }
}


```
### 第四步使用

```
public void addAdminUser(
            @JsonArg("userName") String userName,
            @JsonArg("realName") String realName,
            @JsonArg("phone") String phone,
            @JsonArg("email") String email,
            @JsonArg("password") String password,
            HttpServletResponse response
        ) throws Exception {

        ValidateUtil.assertNotEmpty(userName, new AddAdminUserException("用户名不能为空！"));
        ValidateUtil.assertNotEmpty(realName, new AddAdminUserException("真实姓名不能为空！"));
        ValidateUtil.assertNotEmpty(phone, new AddAdminUserException("电话号码不能为空！"));
        ValidateUtil.assertNotEmpty(email, new AddAdminUserException("邮箱不能为空！"));
        ValidateUtil.assertNotEmpty(password, new AddAdminUserException("密码不能为空！"));
        Admin admin = new Admin();

        admin.setUserName(userName);
        admin.setRealName(realName);
        admin.setPhone(phone);
        admin.setEmail(email);
        boolean flag = adminService.addAdminUser(admin, password);


        if (flag) {
            try {
                response.getWriter().write("200");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
```
