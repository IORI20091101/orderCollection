var temp = new Date();
var regex = /\//g;
(temp.toLocaleDateString() + ' ' + temp.toLocaleTimeString().slice(2)).replace(regex,'-');

// "2015-5-7 9:04:10"

new Date("2015-5-7 9:04:10");

// Thu May 07 2015 09:04:10 GMT+0800 (CST)
想将一个标准的时间对象转换为unix时间戳？valueOf搞定之

(new Date).valueOf();

// 1431004132641
许多朋友还提醒了这样可以快速得到时间戳

+new Date


temp.toLocaleDateString()
"2015/6/9"
temp.toLocaleTimeString()
"下午6:27:46"


& (按位与)
判断一个数是否为2的n次幂，可以将其与自身减一相与

var number = 4
(number & number -1) === 0 // true
^ (按位异或)
不同第三个变量，就可以交换两个变量的值

var a = 4,b = 3
a = a ^ b // 7
b = a ^ b // 4
a = b ^ a // 3








null 进行数值类型的环境中会被当做0  null+ 35 = 35

"37" + 7 = "377"   +号运算会将数字转化成字符串

"37" - 7 = 30      -号运算会将字符串转化成数字

parseInt("100sd.sd") 100   parseInt会进行转换
parseFloat("s100s")  ==>  NaN

var unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!"
}
console.log(unusualPropertyNames."");   // 语法错误: Unexpected string
console.log(unusualPropertyNames[""]);  // An empty string
console.log(unusualPropertyNames.!);    // 语法错误: Unexpected token !
console.log(unusualPropertyNames["!"]); // Bang!

函数科里化


var b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false


typeof NaN   "number"

typeof null "object"

<a href="javascript:void(0)">Click here to do nothing</a>
<a href="javascript:void(document.form.submit())">
Click here to submit</a>


var s = "s"  typeof s   'string'

var s = new Object('s') typeof s object

'blue whale'.includes('blue');

'concat'.concat('2456')  == "concat2456"

String.fromCharCode(65,66,67)    ===> "ABC"

"abc".repeat(2)


理解数组

var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty,Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs nothing; the cats array is empty

cats.length = 3;
console.log(cats); // [undefined, undefined, undefined]




function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20


"1,2" == [1,2]  ======》    true

Object.is(NaN, NaN)  =====> true


rand10 = Math.floor(Math.random()*10) // before
rand10 = 0|Math.random()*10 // after
rand10 = ~~(Math.random()*10); //或者这样








{
    "auto_complete": true,
    "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",
    "font_size": 16.0,
    "highlight_line": true,
    "highlight_modified_tabs": true,
    "ignored_packages":
    [
    ],
    "open_files_in_new_window": false,
    "save_on_focus_lost": true,
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true
}










——————————————————————————————————————————————————————————————————————————

sublimetext 安装插件

/*Sublime Text 2 代码*/
import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')

/*Sublime Text 3 代码*/
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)



 Ctrl + Shift + P 调出面板，然后输入 pci ，选中“Package Control: Install Package”并回车，然后通过输入插件的名字找到插件并回车安装即可。



1. Emmet
Emmet的前身是大名鼎鼎的Zen coding，如果你从事Web前端开发的话，对该插件一定不会陌生。它使用仿CSS选择器的语法来生成代码，大大提高了HTML/CSS代码编写的速度。










sublime 配置


// While you can edit this file, it's best to put your changes in
// "User/Preferences.sublime-settings", which overrides the settings in here.
//
// Settings may also be placed in file type specific options files, for
// example, in Packages/Python/Python.sublime-settings for python files.
{
// Sets the colors used within the text area
// 主题文件的路径
"color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",

// Note that the font_face and font_size are overriden in the platform
// specific settings file, for example, "Preferences (Linux).sublime-settings".
// Because of this, setting them here will have no effect: you must set them
// in your User File Preferences.
// 设置字体和大小，必须在Settings-User里重写，这里设置没有任何效果
"font_face": "Consolas",
"font_size": 16,

// Valid options are "no_bold", "no_italic", "no_antialias", "gray_antialias",
// "subpixel_antialias" and "no_round" (OS X only)
// 字体选项：no_bold不显示粗体字，no_italic不显示斜体字，no_antialias和no_antialias关闭反锯齿
// subpixel_antialias和no_round是OS X系统独有的
"font_options": [],

// Characters that are considered to separate words
// 在文字上双击会全选当前的内容，如果里面出现以下字符，就会被截断
"word_separators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?",
// Set to false to prevent line numbers being drawn in the gutter
// 是否显示行号
"line_numbers": true,

// Set to false to hide the gutter altogether
// 是否显示行号边栏
"gutter": true,

// Spacing between the gutter and the text
// 行号边栏和文字的间距
"margin": 4,

// Fold buttons are the triangles shown in the gutter to fold regions of text
// 是否显示代码折叠按钮
"fold_buttons": true,

// Hides the fold buttons unless the mouse is over the gutter
// 不管鼠标在不在行号边栏，代码折叠按钮一直显示
"fade_fold_buttons": true,

// Columns in which to display vertical rulers
//列显示垂直标尺，在中括号里填入数字，宽度按字符计算
"rulers": [],

// Set to true to turn spell checking on by default
// 是否打开拼写检查
"spell_check": false,

// The number of spaces a tab is considered equal to
// Tab键制表符宽度
"tab_size": 4,

// Set to true to insert spaces when tab is pressed
// 设为true时，缩进和遇到Tab键时使用空格替代
"translate_tabs_to_spaces": false,

// If translate_tabs_to_spaces is true, use_tab_stops will make tab and
// backspace insert/delete up to the next tabstop
// translate_tabs_to_spaces设置为true，Tab和Backspace的删除/插入作用于制表符宽度
// 否则作用于单个空格
"use_tab_stops": true,

// Set to false to disable detection of tabs vs. spaces on load
// false时禁止在载入的时候检测制表符和空格
"detect_indentation": true,

// Calculates indentation automatically when pressing enter
// 按回车时，自动与制表位对齐
"auto_indent": true,

// Makes auto indent a little smarter, e.g., by indenting the next line
// after an if statement in C. Requires auto_indent to be enabled.
//针对C语言的
"smart_indent": false,

// Adds whitespace up to the first open bracket when indenting. Requires
// auto_indent to be enabled.
// 需要启用auto_indent，第一次打开括号缩进时插入空格？（没测试出来效果...）
"indent_to_bracket": true,

// Trims white space added by auto_indent when moving the caret off the
// line.
// 显示对齐的白线是否根据回车、tab等操作自动填补
"trim_automatic_white_space": true,

// Disables horizontal scrolling if enabled.
// May be set to true, false, or "auto", where it will be disabled for
// source code, and otherwise enabled.
// 是否自动换行，如果选auto，需要加双引号
"word_wrap": true,

// Set to a value other than 0 to force wrapping at that column rather than the
// window width
// 设置窗口内文字区域的宽度
"wrap_width": 0,

// Set to false to prevent word wrapped lines from being indented to the same
// level
// 防止被缩进到同一级的字换行
"indent_subsequent_lines": true,

// Draws text centered in the window rather than left aligned
// 如果没有定义过，则文件居中显示（比如新建的文件）
"draw_centered": false,

// Controls auto pairing of quotes, brackets etc
// 自动匹配引号，括号等
"auto_match_enabled": true,

// Word list to use for spell checking
// 拼写检查的单词列表路径
"dictionary": "Packages/Language - English/en_US.dic",

// Set to true to draw a border around the visible rectangle on the minimap.
// The color of the border will be determined by the "minimapBorder" key in
// the color scheme
// 代码地图的可视区域部分是否加上边框，边框的颜色可在配色方案上加入minimapBorder键
"draw_minimap_border": false,

// If enabled, will highlight any line with a caret
// 突出显示当前光标所在的行
"highlight_line": false,

// Valid values are "smooth", "phase", "blink", "wide" and "solid".
// 设置光标闪动方式
"caret_style": "smooth",

// Set to false to disable underlining the brackets surrounding the caret
// 是否特殊显示当前光标所在的括号、代码头尾闭合标记
"match_brackets": true,

// Set to false if you'd rather only highlight the brackets when the caret is
// next to one
// 设为false时，只有光标在括号或头尾闭合标记的两端时，match_brackets才生效
"match_brackets_content": true,

// Set to false to not highlight square brackets. This only takes effect if
// match_brackets is true
// 是否突出显示圆括号，match_brackets为true生效
"match_brackets_square": false,

// Set to false to not highlight curly brackets. This only takes effect if
// match_brackets is true
// 是否突出显示大括号，match_brackets为true生效
"match_brackets_braces": false,

// Set to false to not highlight angle brackets. This only takes effect if
// match_brackets is true
// 是否突出显示尖括号，match_brackets为true生效
"match_brackets_angle": false,

// Enable visualization of the matching tag in HTML and XML
// html和xml下突出显示光标所在标签的两端，影响HTML、XML、CSS等
"match_tags": true,

// Highlights other occurrences of the currently selected text
// 全文突出显示和当前选中字符相同的字符
"match_selection": true,

// Additional spacing at the top of each line, in pixels
// 设置每一行到顶部，以像素为单位的间距，效果相当于行距
"line_padding_top": 1,

// Additional spacing at the bottom of each line, in pixels
// 设置每一行到底部，以像素为单位的间距，效果相当于行距
"line_padding_bottom": 1,

// Set to false to disable scrolling past the end of the buffer.
// On OS X, this value is overridden in the platform specific settings, so
// you'll need to place this line in your user settings to override it.
// 设置为false时，滚动到文本的最下方时，没有缓冲区
"scroll_past_end": true,

// This controls what happens when pressing up or down when on the first
// or last line.
// On OS X, this value is overridden in the platform specific settings, so
// you'll need to place this line in your user settings to override it.
// 设置成true，当光标已经在第一行时，再Up则到行首，如果光标已经在最后一行，再Down则跳到行尾
"move_to_limit_on_up_down": false,

// Set to "none" to turn off drawing white space, "selection" to draw only the
// white space within the selection, and "all" to draw all white space
// 按space或tab时，实际会产生白色的点（一个空格一个点）或白色的横线（tab_size设置的制表符的宽度），选中状态下才能看到
// 设置为none时，什么情况下都不显示这些点和线
// 设置为selection时，只显示选中状态下的点和线
// 设置为all时，则一直显示
"draw_white_space": "selection",

// Set to false to turn off the indentation guides.
// The color and width of the indent guides may be customized by editing
// the corresponding .tmTheme file, and specifying the colors "guide",
// "activeGuide" and "stackGuide"
// 制表位的对齐白线是否显示，颜色可在主题文件里设置（guide，activeGuide，stackGuide）
"draw_indent_guides": true,

// Controls how the indent guides are drawn, valid options are
// "draw_normal" and "draw_active". draw_active will draw the indent
// guides containing the caret in a different color.
// 制表位的对齐白线，draw_normal为一直显示，draw_active为只显示当前光标所在的代码控制域
"indent_guide_options": ["draw_normal"],

// Set to true to removing trailing white space on save
// 为true时，保存文件时会删除每行结束后多余的空格
"trim_trailing_white_space_on_save": false,

// Set to true to ensure the last line of the file ends in a newline
// character when saving
// 为true时，保存文件时光标会在文件的最后向下换一行
"ensure_newline_at_eof_on_save": false,

// Set to true to automatically save files when switching to a different file
// or application
// 切换到其它文件标签或点击其它非本软件区域，文件自动保存
"save_on_focus_lost": true,

// The encoding to use when the encoding can't be determined automatically.
// ASCII, UTF-8 and UTF-16 encodings will be automatically detected.
// 编码时不能自动检测编码时，将自动检测ASCII, UTF-8 和 UTF-16
"fallback_encoding": "Western (Windows 1252)",

// Encoding used when saving new files, and files opened with an undefined
// encoding (e.g., plain ascii files). If a file is opened with a specific
// encoding (either detected or given explicitly), this setting will be
// ignored, and the file will be saved with the encoding it was opened
// with.
// 默认编码格式
"default_encoding": "UTF-8",

// Files containing null bytes are opened as hexadecimal by default
// 包含空字节的文件被打开默认为十六进制
"enable_hexadecimal_encoding": true,

// Determines what character(s) are used to terminate each line in new files.
// Valid values are 'system' (whatever the OS uses), 'windows' (CRLF) and
// 'unix' (LF only).
// 每一行结束的时候用什么字符做终止符
"default_line_ending": "system",

// When enabled, pressing tab will insert the best matching completion.
// When disabled, tab will only trigger snippets or insert a tab.
// Shift+tab can be used to insert an explicit tab when tab_completion is
// enabled.
// 设置为enabled时，在一个字符串间按Tab将插入一个制表符
// 设置为true时，按Tab会根据前后环境进行代码自动匹配填补
"tab_completion": true,

// Enable auto complete to be triggered automatically when typing.
// 代码提示
"auto_complete": true,

// The maximum file size where auto complete will be automatically triggered.
// 代码提示的大小限制
"auto_complete_size_limit": 4194304,

// The delay, in ms, before the auto complete window is shown after typing
// 代码提示延迟显示
"auto_complete_delay": 50,

// Controls what scopes auto complete will be triggered in
// 代码提示的控制范围
"auto_complete_selector": "source - comment",

// Additional situations to trigger auto complete
// 触发代码提示的其他情况
"auto_complete_triggers": [ {"selector": "text.html", "characters": "<"} ],

// By default, auto complete will commit the current completion on enter.
// This setting can be used to make it complete on tab instead.
// Completing on tab is generally a superior option, as it removes
// ambiguity between committing the completion and inserting a newline.
// 设为false时，选择提示的代码按回车或点击可以输出出来，但选择true时不会输出而是直接换行
"auto_complete_commit_on_tab": false,

// Controls if auto complete is shown when snippet fields are active.
// Only relevant if auto_complete_commit_on_tab is true.
// auto_complete_commit_on_tab必须为true，控制代码提示的活跃度（没明白...）
"auto_complete_with_fields": false,

// By default, shift+tab will only unindent if the selection spans
// multiple lines. When pressing shift+tab at other times, it'll insert a
// tab character - this allows tabs to be inserted when tab_completion is
// enabled. Set this to true to make shift+tab always unindent, instead of
// inserting tabs.
// 设置为false，使用Shift + tab总是插入制表符
"shift_tab_unindent": true,

// If true, the selected text will be copied into the find panel when it's
// shown.
// On OS X, this value is overridden in the platform specific settings, so
// you'll need to place this line in your user settings to override it.
// 选中的文本按Ctrl + f时，自动复制到查找面板的文本框里
"find_selected_text": true,

//
// User Interface Settings
//

// The theme controls the look of Sublime Text's UI (buttons, tabs, scroll bars, etc)
// DataPackagesTheme - DefaultDefault.sublime-theme控制软件的主题
"theme": "Default.sublime-theme",

// Set to 0 to disable smooth scrolling. Set to a value between 0 and 1 to
// scroll slower, or set to larger than 1 to scroll faster
// 滚动的速度
"scroll_speed": 1.0,

// Controls side bar animation when expanding or collapsing folders
// 左边边栏文件夹动画
"tree_animation_enabled": true,
// 标签页的关闭按钮
"show_tab_close_buttons": true,

// OS X 10.7 only: Set to true to disable Lion style full screen support.
// Sublime Text must be restarted for this to take effect.
// 针对OS X
"use_simple_full_screen": false,

// Valid values are "system", "enabled" and "disabled"
// 水平垂直滚动条：system和disabled为默认显示方式，enabled为自动隐藏显示
"overlay_scroll_bars": "system",

//
// Application Behavior Settings
//

// Exiting the application with hot_exit enabled will cause it to close
// immediately without prompting. Unsaved modifications and open files will
// be preserved and restored when next starting.
//
// Closing a window with an associated project will also close the window
// without prompting, preserving unsaved changes in the workspace file
// alongside the project.
// 热推出功能！退出时不会提示是否保存文件，而是直接退出
// 下次打开软件时，文件保持退出前的状态，没来得及保存的内容都在，但并没有真实的写在原文件里
"hot_exit": true,

// remember_open_files makes the application start up with the last set of
// open files. Changing this to false will have no effect if hot_exit is
// true
// 软件使用最后的设定打开文件，hot_exit为true时没有效果
"remember_open_files": true,

// OS X only: When files are opened from finder, or by dragging onto the
// dock icon, this controls if a new window is created or not.
// 针对OS X
"open_files_in_new_window": true,

// Set to true to close windows as soon as the last file is closed, unless
// there's a folder open within the window. This is always enabled on OS X,
// changing it here won't modify the behavior.
// 针对OS X
"close_windows_when_empty": true,
// 哪些文件会被显示到边栏上
// folder_exclude_patterns and file_exclude_patterns control which files
// are listed in folders on the side bar. These can also be set on a per-
// project basis.
"folder_exclude_patterns": [".svn", ".git", ".hg", "CVS"],
"file_exclude_patterns": ["*.pyc", "*.pyo", "*.exe", "*.dll", "*.obj","*.o", "*.a", "*.lib", "*.so", "*.dylib", "*.ncb", "*.sdf", "*.suo", "*.pdb", "*.idb", ".DS_Store", "*.class", "*.psd", "*.db"],
// These files will still show up in the side bar, but won't be included in
// Goto Anything or Find in Files
"binary_file_patterns": ["*.jpg", "*.jpeg", "*.png", "*.gif", "*.ttf", "*.tga", "*.dds", "*.ico", "*.eot", "*.pdf", "*.swf", "*.jar", "*.zip"],

// List any packages to ignore here. When removing entries from this list,
// a restart may be required if the package contains plugins.
// 删除你想要忽略的插件，需要重启
"ignored_packages": ["Vintage"]
}

