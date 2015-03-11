# System-wide .profile for sh(1)

if [ -x /usr/libexec/path_helper ]; then
	eval `/usr/libexec/path_helper -s`
fi

if [ "${BASH-no}" != "no" ]; then
	[ -r /etc/bashrc ] && . /etc/bashrc
fi


JAVA_6_HOME=/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home

JAVA_7_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_76.jdk/Contents/Home

JAVA_8_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_40.jdk/Contents/Home

JAVA_HOME=$JAVA_6_HOME


CLASS_PATH="$JAVA_HOME/lib"

PATH=".:$PATH:$JAVA_HOME/bin"

export JAVA_HOME


alias jdk8='export JAVA_HOME=$JAVA_8_HOME'
alias jdk7='export JAVA_HOME=$JAVA_7_HOME'
alias jdk6='export JAVA_HOME=$JAVA_6_HOME'




export M2_HOME=/Users/toshiba/Documents/myApp/apache-maven-3.2

export PATH=$PATH:$M2_HOME/bin
