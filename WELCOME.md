# Commands git:

## Create repository:

`git init` - Creating a .git file in the current project directory
`git add .` - This command adds all files to  _index_ for later commit

`git commit -m "..."` - This command creates a new commit with the massege "...". 
A commit records the current state of the _index_ (all added files) in the version history.

`git branch -M main` - This command renames the current branch to main.
The `-M`- flag forces a branch to be renamed, even if a branch named main already exists.

`git remote add origin http://github.com/.` - This commands adds a remote repository named **origin** pointing to the URL of your GitHub repository.

`git push -u origin main` - This command  pushes your commits from the local main branch to the remote origin reposotory. 
The `-u` - flag sets origin/main as the "tracked" branch, which allows you to later use just `git push` and `git pull` without specifying the remote repository and branch.

`git config` - The git config command is used to configure Git settings on your computer. 
It allows you to chanhe various settings such as username(`git config --g user.name "Your name"`), email(`git config --g user.email "Your email"`), defaul editor(`git config --g core.editor ././.`). 

The `--global`/`-g` flag means that this configuration will apply to all repositories on your computer.
`git status` - The git status command is used to display the current state of the working directory and index in Git. It provides information about what changes have been made, what files are being tracked, and what files have been changed but not yet added to the commit index.

## Flags with command `git config`

`--system` - This flag is used to set system level configuration. 
Settings applied with this flag will apply to all users on that computer and to all repositories.  

`--local` - This flag sets the configuration for the current repository only. 
Settings applied with this flag will only take effect in the context of the repository in which you are running the command.  

`--global` - This flag sets the configuration for the current user. 
Settings applied with this flag will apply to all repositories that this user creates or uses on this computer. 

`--list` -  This command will list all the settings that have been set, including username and email address.

## Git command `alias`

In Git, you can use aliases to simplify and shorten commands. This allows you to create short commands for frequently used operations.

`git config --get-regexp alias` - This command will list all the aliases you have configured.

`git config --global --unset alias.s` - This will remove the alias `s` that you created earlier.

### Example

`git config --global alias.s status` => `git s`
`git config --global alias.c 'commit -m'` => `git c`

`git config --global alias.c '!echo "hellow"; echo "from git"` - `!git..; git..` in alias allows you to execute multiple commands

## Help with Git

`-h`/ `help` - The -h flag in Git is used to display help information about commands and their parameters. It is short for --help. 
When you add -h to a Git command, you get information about how to use that command, including available options and examples.

### Example

`git commit -h`

## Git command `git upadate-index`

    The `git update-index` command is used to manage the index (or "staging area") in Git.
An index is an intermediate store where you can prepare changes before committing them.
With this command, you can add, delete, or change files in the index, as well as perform other operations related to preparing changes.

### Flag `--chmode` with command

    The --chmod flag in the git update-index command is used to change the access mode (permission) of a file in the Git index.

    The flag takes two values: +x to add executable rights and -x to remove them.

### Example 

`git update-index --chmod=+x <file_name>` 

## Git command `git show`

    The git show command is used to display information about various objects in Git, such as commits, tags, and files. 
It allows you to view the changes made to a specific commit, as well as metadata such as the author, date, and message of the commit.

### Flag `--pretty=<param>`

The `--pretty` flag in the `git show` command is used to configure the output format for commit information. 
It allows you to specify exactly how you want to see commit data, including elements such as the commit hash, author, date, and commit message. 
This can be useful for creating more readable or compact output depending on your needs.

    You can use predefined formats such as oneline, short, medium, full, fuller, email, and format:<string> to customize the output as you wish.

### Example 

`git show <hesh_commit>`
`git show <hesh_commit> --pretty=<fuller>`

## Git command `git reset`

The `git reset` command is used to change the state of the index and working directory in Git. 
It allows you to undo changes, move the branch pointer to another commit, and manage the state of files in the repository. 
Depending on the flag used, `git reset` may change only the index, only the working directory, or both.

### Flag `--force`

The `--force` flag in the `git reset` command is used to force changes to the remote repository, even though this may result in overwriting the commit history. 
This flag is especially useful in situations where the local branch has been changed (for example, using git rebase or git reset) and you want to update the remote branch to match your local version.

## Flag `-p`

The `-p` (or `--patch`) flag in Git is used in commands such as git add, git checkout, and git reset to interactively select the changes you want to commit or discard. 
This flag allows you to view changes to files and choose which ones you want to include in the index or working directory, giving you finer control over the process.

## Flag `-all`

The `-a`(or `--all`) flag in Git is used in various commands to indicate that an action should be applied to all matching objects or elements. 
This flag can have different meanings depending on the context in which it is used.

### Git command `git commit` with flag `-a`

When you use the `-a` flag with the git commit command, Git automatically adds all tracked changes to the index before creating a commit. 
This avoids the need to manually add changes using git add.

`git commit -a -m "Сообщение коммита"`

## Git command `git rm`

The `git rm` command is used in Git to remove files from the working directory and the _index_ (stage) at the same time. 
That is, when you use git rm, the file will not only be removed from your workspace, but will also be marked for removal in the next commit. 
This command helps keep your repository clean by removing unnecessary files.

### Options

Flag `-f` or `--force`:
    Used to force the removal of files that have been modified but not yet added to the index. 
This may result in the loss of unsaved changes, so use with caution.

Flag `--cached`: 
    Removes the file from the index (stage) only, leaving it in the working directory. 
This is useful if you want to remove a file from tracking but keep it local.

Flag `-r` or `--recursive`: 
    Removes directories and all their contents recursively.

## Git command `git mv`

The `git mv` command is used in Git to rename or move files and directories. 
This command combines the functionality of two operations: deleting an old file and adding a new one, which allows Git to track changes in history.

`git mv old_filename.txt new_filename.txt`