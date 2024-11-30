# SDC JavaScript/TypeScript Web Development Tasks

## Installation

### Fork current repository into your account

1. Navigate to https://github.com/School-of-Digital-Competencies/js-ts-tasks
2. Click on `Fork` button in the top right corner
3. Select your personal account in the `Ownder` dropdown
4. Don't change the `Repository name`
5. _Uncheck_ button `Copy the main branch only`
6. Click on `Create fork` button
7. Navigate to your forked repository

### Cloning your forked repository with tasks into your local machine

1. Navigate to your forker repository and click on blue button `Clone`
2. In dropdown find section **Clone with SSH** and copy that url git@github:...git
3. In console on your machine navigate to any folder you like and paste copied url after git clone: `git clone git@github...tasks.git`
4. Type in yes if console asks you about fingerprint
5. After cloning is done, in console type in `cd js-ts-tasks` and click Enter
6. Now you should be in a folder `js-ts-tasks`
7. In console type in `git config user.name "Name Surname"` where Name is your Name (same as on Github profile) and Surname is your Surname (same as on Github profile). **Your name should be written in English**. **Don't remove " " symbols**
8. In console type in `git config user.email youremailaddress@student.ehu.lt` where `youremailaddress@student.ehu.lt` is your address you used to register on Github (the same as on Github profile)
9. In console type in `git config user.name` and click Enter. You should see your name
10. In console type in `git config user.email` and click Enter. You should see your email address

## How to solve Hometasks

We are using different branches for your hometasks

```
main - used for general repository instructions
```

Each branch starting with `hometasks-...` contains a set of tasks dedicated to the lecture module.

```
hometasks-sections-hero
hometasks-sections-forms
...
```

To solve each hometask you must checkout to the related branch into your local cloned repository

## How to copy new hometasks into your already forked repository

### One-time installation step

Please add remote branch linking into your local git

#### Console

To do this, please in console run commands

```
git remote rm upstream

git remote add upstream https://github.com/school-of-digital-competencies/js-ts-tasks
```

#### Visual Studio Code

In Source Control menu click on three dots -> Remote -> Add remote -> Paste `https://github.com/school-of-digital-competencies/js-ts-tasks` -> Enter upstream

**NOTE** You might need to remove previously created upstream. In Source Control menu click on three dots -> Remote -> Remove remote -> upstream.

### How to start solving new tasks (get new branches into your Git)

#### Console

When the linking is created (see instructions above), run command `git fetch upstream` to get a new branch with tasks.

Type `git branch -a` to ensure you see in a list lines like `remotes/upstream/hometasks-...`.

Assuming the new branch (with new tasks you haven't solved yet) is `hometasks-simple-tasks`.

Type `git switch hometasks-simple-tasks`. If you see two messages

```
Branch 'hometasks-simple-tasks' set up to track remote branch 'hometasks-simple-tasks' from 'upstream'
Switched to a new branch 'hometasks-simple-tasks'
```

Then you did it correctly.

Now the next step is to publish that branch into your Git repositry (origin). Run command `git push -u origin`. You should see a list of messages containing that line:

```
...
To github.com:YOUR_NAME/js-ts-tasks.git
* [new branch]     hometasks-simple-tasks -> hometasks-simple-tasks
...
```

You're done, now you could write solutions for your task.

#### Visual Studio Code

Now when the linking is created, In Source Control menu click on three dots -> Pull, Push -> Fetch From All Remotes menu item to get a new branch with tasks.

Then checkout/switch to that branch (`upstream/hometasks-...`)

Now you could create your solution locally.

To prepare for Autocode submit please push your local branch into your repository. In Source Control menu click on three dots -> Pull, Push -> Push to... -> Select **origin (not upstream)**

### How to get tasks updates

#### Console

Sometimes there are improvements in already published tasks. To get new changes from upstream repository you should use `git pull` command.

For example, let's assume there are some updated in `upstream/hometasks-simple-tasks` branch. Run in console `git pull upstream hometasks-simple-tasks` to pull recent changes from remote branch into your local repository.

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
2. Each task has its own instructions in README.md

## How to submit solution to Moodle

1. Develop a solution
2. Commit your solution
3. _Push your solution to your forked repository_
4. Submit a link to the branch with solution in your forked repository to the moodle
