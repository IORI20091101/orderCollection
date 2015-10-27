" Configuration file for vim
set modelines=0		" CVE-2007-2438

" Normally we use vim-extensions. If you want true vi-compatibility
" remove change the following statements
set nocompatible	" Use Vim defaults instead of 100% vi compatibility
set backspace=2		" more powerful backspacing

syntax enable
set background=dark
colorscheme solarized

set nocp

set nocompatible
set number
set title
set titlestring=%F
set autoindent
set smartindent
set showmatch
set hls
set incsearch
set shiftwidth=4
set ts=4
set expandtab
set ruler
set mousehide
set mouse=v
set encoding=utf-8
set fileencodings=utf-8,chinese,latin-1
set visualbell
set guifont=Monaco:h20
set completeopt=longest,menu
set t_Co=256

if has("cscope")
    set cscopequickfix=s-,c-,d-,i-,t-,e-
    set cst
    map <C-_> : cstag <C-R>=expand("<cword>")<CR><CR>
    map g<C-]> :cs find 3 <C-R>=expand("<cword>")<CR><CR>
    map g<C-/> :cs find 0 <C-R>=expand("<cword>")<CR><CR>
    if filereadable("cscope.out")
        cs add cscope.out
    elseif $CSCOPE_DB != ""
        cs add $CSCOPE_DB
    endif
endif

" Pathogen load
filetype off

call pathogen#infect()
call pathogen#helptags()
"pymode
let g:pymode_lint = 0
setlocal textwidth=120

"execute pathogen#infect()

"bundles
set nocompatible                " be iMproved
filetype off                    " required!
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

"fzf
set rtp+=~/.fzf

" let Vundle manage Vundle
" required! 
Bundle 'gmarik/vundle'

" Bundle 'edkolev/tmuxline.vim'

Bundle 'bling/vim-airline'

Bundle 'mattn/emmet-vim'

Bundle 'godlygeek/tabular'

Bundle 'plasticboy/vim-markdown'

" Bundle 'Valloric/YouCompleteMe'

Bundle 'tpope/vim-commentary'

Bundle 'fatih/vim-go'

Bundle 'maksimr/vim-jsbeautify'

" PHP
Bundle 'shawncplus/phpcomplete.vim'

" EJS 模板
Bundle 'briancollins/vim-jst'

" SQL 格式化
Bundle 'vim-scripts/SQLUtilities'

Bundle 'vim-scripts/Align'

Bundle 'junegunn/seoul256.vim'

Plugin 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }


let g:go_highlight_functions = 1
let g:go_highlight_methods = 1
let g:go_highlight_structs = 1
let g:go_highlight_operators = 1
let g:go_highlight_build_constraints = 1
let g:go_play_open_browser = 0

au FileType go nmap <Leader>ds <Plug>(go-def-split)
au FileType go nmap <Leader>dv <Plug>(go-def-vertical)
au FileType go nmap <Leader>dt <Plug>(go-def-tab)


Bundle 'moll/vim-node'

"更高效的移动 // + w/f/l
Bundle 'Lokaltog/vim-easymotion'

Bundle 'nsf/gocode', {'rtp': 'vim/'}

let g:EasyMotion_leader_key = 'f'
map  / <Plug>(easymotion-sn)
omap / <Plug>(easymotion-tn)

" emmet (html) config 
let g:user_emmet_install_global = 0

autocmd FileType html,css EmmetInstall


filetype plugin indent on

"airline
if !exists('g:airline_symbols')
    let g:airline_symbols = {}
endif

let g:airline#extensions#tabline#enabled = 1
set laststatus=2
let g:airline_section_b = '%{getcwd()}'
let g:airline_section_c = '%t'

"highlight Functions
syn match cFunctions "\<[a-zA-Z_][a-zA-Z_0-9]*\>[^()]*)("me=e-2
syn match cFunctions "\<[a-zA-Z_][a-zA-Z_0-9]*\>\s*("me=e-1
hi cFunctions guifg=#7fd02e cterm=bold ctermfg=blue
syn match cClass "\<[a-zA-Z_][a-zA-Z_0-9]*\>::"me=e-2
hi cClass guifg=#7fd02e cterm=bold ctermfg=blue


" let g:airline_powerline_fonts = 1 
let g:airline_symbols.space = "\ua0"
" unicode symbols
let g:airline_left_sep = ''
let g:airline_right_sep = ''
let g:airline_symbols.linenr = '␊'
let g:airline_symbols.linenr = '␤'
let g:airline_symbols.linenr = '¶'
let g:airline_symbols.branch = '⎇'
let g:airline_symbols.paste = 'ρ'
let g:airline_symbols.paste = 'Þ'
let g:airline_symbols.paste = '∥'
let g:airline_symbols.whitespace = 'Ξ'



" EasyAlign
" Start interactive EasyAlign in visual mode
vmap <Enter> <Plug>(EasyAlign)

" Start interactive EasyAlign with a Vim movement
nmap <Leader>a <Plug>(EasyAlign)


set laststatus=2
"execute pathogen#infect()


if has("gui_running")
    set cursorline
    colorscheme murphy
    syntax enable
    set t_Co=256
    set background=dark
    colorscheme solarized
endif

"set guifont=Courier\ YaHei\ Consolas\ Hybrid:h18
highlight Cursorline guibg=grey15
set guioptions-=T
set fileformat=unix
"set lines=49
"set columns=100
set mouse=a
"endif

" Don't write backup file if vim is being called by "crontab -e"
au BufWrite /private/tmp/crontab.* set nowritebackup
" Don't write backup file if vim is being called by "chpass"
au BufWrite /private/etc/pw.* set nowritebackup

set helplang=cn

let g:BASH_AuthorName   = 'YangBing'
let g:BASH_Email        = 'yangbing@gozap.com'
let g:BASH_Company      = 'gozap'
let Tlist_Show_One_File=1
let Tlist_Exit_OnlyWindow=1
let g:SuperTabRetainCompletionType=2
let g:SuperTabDefaultCompletionType="<C-X><C-O>"

"NERD Tree
let NERDTreeWinSize=28

"go 
"let g:go_disable_autoinstall = 1
"
au FileType go setlocal noexpandtab shiftwidth=4 tabstop=4 softtabstop=4 nolist
"au FileType go autocmd BufWritePre <buffer> Fmt


"let Tlist_Ctags_Cmd='/usr/local/bin/ctags'

map <C-?> :!ctags -R --c++-kinds=+p --fields=+iaS --extra=+q .<CR>  
map <C-e><C-d> :call FormartSrc()<CR> 
"cscope
nmap <C-\>s :cs find s <C-R>=expand("<cword>")<CR><CR>
nmap <C-\>g :cs find g <C-R>=expand("<cword>")<CR><CR>
nmap <C-\>c :cs find c <C-R>=expand("<cword>")<CR><CR>
nmap <C-\>t :cs find t <C-R>=expand("<cword>")<CR><CR>
nmap <C-\>e :cs find e <C-R>=expand("<cword>")<CR><CR>
nmap <C-\>f :cs find g <C-R>=expand("<cword>")<CR><CR>
nmap <C-\>i :cs find i ^<C-R>=expand("<cword>")<CR><CR>
nmap <C-\>d :cs find d <C-R>=expand("<cword>")<CR><CR>

au FileType javascript noremap <buffer>  <Leader>ff  :call JsBeautify()<cr>
"     " for html
au FileType html noremap <buffer> <Leader>ff  :call HtmlBeautify()<cr>
"         " for css or scss
au FileType css noremap <buffer> <Leader>ff  :call CSSBeautify()<cr>


"格式化代码 
func FormartSrc() 
    exec "w" 
    if &filetype == 'c'
        exec "!astyle % –style=ansi –suffix=none -p %"
        exec "e! %" 
    elseif &filetype == 'cpp' 
        exec "!astyle % –style=ansi –suffix=none -p %"
        exec "e! %" 
    endif 
endfunc 
"结束定义FormartSrc
"vimim 输入法
let g:vimim_myclound = 0

"粘贴时不换 剪切板
xnoremap p pgvy
" 取消粘贴缩进
"set paste
set rtp+=/usr/local/opt/fzf
