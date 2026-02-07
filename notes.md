# Git & Github

## 1 Git Fundamentals

### Core Concepts

#### Version Control System (VCS)

A system that tracks and manages changes to files over time.

- **Centralized VCS** (e.g., SVN) has a single central server; if it goes down, work can stop.

- **Distributed VCS** (Git) allows every developer to have a full copy of the repository, enabling offline work and better reliability.

⸻

Git
A distributed version control system for tracking and managing source code changes. It helps developers collaborate, manage code history, revert mistakes, and work on multiple features simultaneously without affecting the main codebase.

⸻

#### Repository (Local vs Remote)

A storage location that contains project files and their version history.

A **local repository** exists on a developer’s machine and contains the full project history.

A **remote repository** is hosted on platforms like GitHub and allows multiple developers to share and synchronize their code.

⸻

#### Working Directory, Staging Area, Repository

- **Working Directory**: Where files are created and edited.
- **Staging Area**: A temporary area where selected changes are prepared for commit.
- **Repository**: The .git directory where committed snapshots and history are stored.

⸻

#### Commit Lifecycle

A commit follows these steps:

1. Modify files in the working directory

2. Stage selected changes using git add

3. Save a snapshot using git commit
   Each commit creates a permanent record with an ID, message, author, and timestamp.

⸻

#### Snapshot-Based Versioning

Git records the entire project state at each commit, not just file differences. Unchanged files are referenced, making Git fast, efficient, and reliable.

⸻

#### Installation & Configuration

Git Installation
The process of installing Git tools on an operating system.

⸻

git config
A command used to set and read Git configuration values.

⸻

Username & Email Configuration
Identity information attached to every Git commit.

⸻

Global Configuration
Settings applied to all repositories for a user.

git config --global user.name "username"
git config --global user.email "email"

⸻

Local Configuration
Settings applied only to a specific repository.

⸻

.gitconfig File
A file that stores Git configuration settings.

---

git init
