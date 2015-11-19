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
