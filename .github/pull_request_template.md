### When you make changes to `node-vinutils` you need to bump the following repos:

| Repository                                               | Packages to bump                                    |
| -------------------------------------------------------- | --------------------------------------------------- |
| https://github.com/connectedcars/vehicle-configs/        | `node-vinutils`                                     |
| https://github.com/connectedcars/node-integration/       | `node-vinutils`                                     |
| https://github.com/connectedcars/node-backend/           | `node-vinutils`, `vehicle-configs`|
| https://github.com/connectedcars/integration/            | `node-backend`, `node-integration`                  |
| https://github.com/connectedcars/api/                    | `node-vinutils`, `node-backend`, `node-integration` |
| https://github.com/connectedcars/notifier/               | `node-vinutils`, `node-backend`, `node-integration` |
| https://github.com/connectedcars/job-runner-rollouts/    | `node-backend`                                      |
| https://github.com/connectedcars/job-runner-integration/ | `node-backend`                                      |
