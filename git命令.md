git命令大全 repository
git push.default设置
http://www.kaiyuanba.cn/html/1/131/227/8029.htm

学会使用git rebase命令
git checkout feature
git checkout -b temporary-branch
git rebase -i master
# [清理目录]
git checkout master
git merge temporary-branch


怎样删除 branch -a 存在而 branch 和 GitHub 上都不存在的分支?
删除本地在远程不存在的分支
git fetch origin --prune
$ git pull -p
# 等同于下面的命令
$ git fetch --prune origin 
$ git fetch -p

或者
git branch -d -r origin/branch_name


删除远程分支：
 git push origin :master
# 等同于
$ git push origin --delete master


git 允许空提交  git commit --allow-empty -m "empty"

longdai-p2p的分支m-dev push上自动触发部署。


与远程分支建立连接两两种情况
一： 在本地新建分支将整个分支推送到远程分支 这种没问题

三： git fetch 可以拉取分支，所有远程信息， 然后新建本地分支做对应即可

二： 先在远程建立分支，在本地新建分支并建立联系通过一下方法

    一哥们将分支push到库中，我怎么获取到他的分支信息呢？

    如果安装了git客户端，直接选择fetch一下，就可以获取到了。

    如果用命令行，运行 git fetch，可以将远程分支信息获取到本地，再运行 git checkout -b local-branchname origin/remote_branchname  就可以将远程分支映射到本地命名为local-branchname  的一分支。


这种方式向线上分支推送代码汇报错
    error: src refspec dongzhi-ms-local does not match any.
    error: failed to push some refs to 'git@172.16.1.143:longdai/longdai.git'

    可以通过方法 git push origin local-ms:dongzhi-ms-local解决但是每次提交都会有这个问题都需要这样写
    通过以下方法来一劳永逸经实验还是不能解决问题， 只能通过上面一条命令来推送
    git show-ref
    git push --set-upstream origin refs/heads/the_remote_branch
***以上错误完全可以避免 只要使用方法2新建分支时 名字与远程分支保持一致即可 类似git checkout -b local-ms origin/local-ms



推送分支的时候建立当前分支与远程分支的上传连接
git push --set-upstream origin dongzhi-ms-local




如果一个文件已经add到暂存区，还没有commit，此时如果不想要这个文件了，有两种方法：
1，用版本库内容清空暂存区，git reset HEAD
2，只把特定文件从暂存区删除，git rm --cache


具体操作
1.git add <FILE>
2.git commit ...
3.git pull --rebase （将你的版本加在最后的节点上）
如果有冲突，会提示你。冲突分为两种，一种是在不同地方的冲突，通常情况下，git是可以自己合并的。另外一种是因为可能是同一个文件的编辑，git没法自动合并，需要二选一，这时候打开冲突的文件，手动编辑文件到可用的版本。然后。。
4.git rebase --continue
重复3，4直到所有的都solve
5.git push





git config --global user.name "dongzhi"
git config --global user.email "sundongzhi11014111@126.com"    创建使用者的名字及邮箱--global全局设置

git diff HEAD -- readme.txt命令可以查看工作区和版本库里面最新版本的区别：

git checkout -- test.txt  没有从库里删除的可以用此命令恢复

git checkout -- readme.txt  这个文件回到最近一次git commit或git add时的状态。

ssh-keygen -t rsa -C "youremail@example.com"    创建SSH Key。


要关联一个远程库，使用命令git remote add origin git@server-name:path/repo-name.git；

关联后，使用命令git push -u origin master第一次推送master分支的所有内容；


git log --pretty=oneline 在一行里显示提交历史记录 头部的长串表示一个随机数唯一标识

git reset --hard xxxx 将文件回退到唯一标识为xxxx的状态文件还原


git push origin :develop 删除远程develop分支
git push origin --delete develop  删除远程develop分支


$ git branch --track (--set-upstream-to) dev origin/dev  指定本地dev分支与远程origin/dev分支的链接，根据提示，设置dev和origin/dev的链接
Consider using --track or --set-upstream-to
Branch dev set up to track


git remote set-url origin git@git.gozap.com:longdai/longdai.git   将http 协议改为ssh认证


加上-a参数可以查看远程分支，远程分支会用红色表示出来（如果你开了颜色支持的话）：
git branch -a


删除远程分支：
git push --delete origin devel

重命名本地分支：
git branch -m devel develop

推送本地分支：
git push origin develop


pwd 用来显示当前目录

mkdir xxx 创建文件夹

git init 初始化git仓库

git add gitOrder.js 添加一个等待提交文件

git commit -m "这里是注释" 提交文件到仓库

git status 查看仓库当前状态

git diff  gitOrder.js  查看某个文件更改过什么东西


git log 查看文件提交历史记录



cat gitOrder.js 用来在命令行里显示文件内容

git reflog 用来记录每一次的命令 可通过这个查找之前进行提交的唯一表示（log中已经消失的）


rm 'test.txt' 从本地删除文件但是没有从库里删除


git rm "test.txt" 从版本库从删除


or create a new repository on the command line


touch README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/IORI20091101/learnGit.git
git push -u origin master




此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；


5. 接着打开git ，测试连接是否成功

$ ssh -T git@github.com



------------------------------------关于可能出现的错误----------------------------------

1.在执行

$ git remote add origin git@github.com:defnngj/hello-world.git

错误提示：fatal: remote origin already exists.

解决办法：

$ git remote rm origin

然后在执行：$ git remote add origin git@github.com:defnngj/hello-world.git 就不会报错误了



2. 在执行

$ git push origin master

错误提示：error:failed to push som refs to.......

解决办法：

$ git pull origin master // 先把远程服务器github上面的文件拉下来，再push 上去。


---------------------------------------------------------------------------------------
$ git clone git@github.com:IORI20091101/gitskills.git

$ ls





$ git clone git@github.com:IORI20091101/learGit.git 从远程库克隆

git checkout -b dev 创建并切换分支

git branch -d dev 删除本地dev分支
git branch -D dev 强行删除本地dev分支

git branch 查看现在所处的分支

git checkout master 切换分支

git merge dev  把当前分支跟dev分支合并

git log --graph --pretty=oneline --abbrev-commit  查看分支的合并情况


通常，合并分支时，如果可能，Git会用Fast forward模式，但这种模式下，删除分支后，会丢掉分支信息。

如果要强制禁用Fast forward模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。
准备合并dev分支，请注意--no-ff参数，表示禁用Fast forward：

$ git merge --no-ff -m "merge with no-ff" dev




软件开发中，bug就像家常便饭一样。有了bug就需要修复，在Git中，由于分支是如此的强大，所以，每个bug都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。

当你接到一个修复一个代号101的bug的任务时，很自然地，你想创建一个分支issue-101来修复它，但是，等等，当前正在dev上进行的工作还没有提交：

$ git status
# On branch dev
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       new file:   hello.py
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   readme.txt
#


Git还提供了一个stash功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：

git stash list命令看看保存的现场：

$ git stash list
stash@{0}: WIP on dev: 6224937 add merge

工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法：

 git stash apply stash@{0}

一是用git stash apply恢复，但是恢复后，stash内容并不删除，你需要用git stash drop来删除；

另一种方式是用git stash pop，恢复的同时把stash内容也删了：





你从远程仓库克隆时，实际上Git自动把本地的master分支和远程的master分支对应起来了，并且，远程仓库的默认名称是origin。

要查看远程库的信息，用git remote
git remote -v显示更详细的信息




$ git push origin master
如果要推送其他分支，比如dev，就改成：

$ git push origin dev

git pull也失败了，原因是没有指定本地dev分支与远程origin/dev分支的链接，根据提示，设置dev和origin/dev的链接：

$ git branch --set-upstream dev origin/dev



git push -f 强制推送，如果本地库恢复到1.0 远程库是2.0 可以用此命令强制推送到远程版本库


git tag v1.0 打标签
git tag   查看所有标签



如果忘记打tag 可以查看commit id，然后打上就可以了：

$ git log --pretty=oneline --abbrev-commit
#6a5819e merged bug fix 101
#cc17032 fix bug 101

$ git tag v0.9 6224937


git show <tagname>查看标签信息 详细

还可以创建带有说明的标签，用-a指定标签名，-m指定说明文字：
$ git tag -a v0.1 -m "version 0.1 released" 3628164

git tag -s <tagname> -m "blablabla..."可以用PGP签名标签；

命令git push origin <tagname>可以推送一个本地标签；

命令git push origin --tags可以推送全部未推送过的本地标签；

命令git tag -d <tagname>可以删除一个本地标签；

命令git push origin :refs/tags/<tagname>可以删除一个远程标签。


error: RPC failed; result=22, HTTP code = 413
fatal: The remote end hung up unexpectedly
fatal: The remote end hung up unexpectedly

I've already done

git config http.postBuffer 524288000, so that doesn't seem to be the issue. What could it be?

I got HTTP code = 0 when my proxy was blocking. My http proxy works with github, but the https doesn't for my corporate proxy. I think my HTTPS proxy forces NTLM, while the HTTP accepts BASIC. I changed the repo origin URL from https to http and it worked for me. git remote set-url origin http://github.com/GitUserName/GitRepoName.git


最近遇到一个git的问题当我想提交代码到studyCollection的时候报一个错误
1，fatal:could not read Username for 'https://github.com': No such file or directory
2，unable to access 'https://github.com/xxxx.git' unknown SSL protocol error in connection to github.com:443
原因有人说是版本问题，更改了.git下的.config文件后解决，解决办法是将 https的url改成 git@gihub类似的SSH的这种通过存的公钥来访问是没有问题的，还可以通过命令来更改
你应该写「git@github.com:xxx/yyy」。使用 git remote set-url origin xxx 来修改成正确的地址。或者直接编辑 .git/config 文件。

