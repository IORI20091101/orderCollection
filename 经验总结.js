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
