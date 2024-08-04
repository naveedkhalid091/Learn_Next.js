i) Install `pnpm` Package Manger - `npm i -g pnpm`
ii) check its version as `pnpm -v`
iii) The Next.js project initialization command using the pnpm will be 
`pnpm create create-next-app@latest`


## Comparison of npm,yarn and pnpm. 

1. Installation commands Usage: 
    i) Installation command of npm: `npm install`.
    ii) installation command of yarn: `yarn install`.	
    iii) installation command of pnpm:`pnpm install`.
2. Lockfile names:
    i)package-lock.json `file name of npm`	
    ii)yarn.lock	   `file name of yarn`
    iii) pnpm-lock.yaml `file name of pnpm`
3. Performance of Packages:
    i) npm - slower compared to others.
    ii) yarn - faster than npm.
    iii) pnpm - Fastest performance.
4. Disk/Space Usage: 
    i) npm - higher disk space compared to others bcz it duplicates packages for each projects.
    ii) yarn - lower disk space than npm due to caching mechanism.
    iii) pnpm - takes low disc space beccause it only download & Install the newer packages and and reuse the already downloaded packages for other projects.
5. Scope: 
    i) npm - standard for javaScript.
    ii) yarn - popular in JavaScript.
    iii) pnpm - Gaining its popularity (Growth Stage).
6. Community: 
    i) npm - Largest community. 
    ii) yarn - strong community.
    iii) pnpm - Growing community.


## UseCases of following packages.  
`npm:`
i) Since it is the default package of Node.js so it is the main choice of most developers. 
ii) Due to wide usage, npm is compatible with large number of libraries, tools and frameworks. 
iii) older projects that were initially set up with npm can continue to use npm without the need to migrate to another package manager. 

`pnpm:`
i) It is suitable for the large projects with numerous dependencies. 
ii) if disk space is concerned then using `pnpm` is best option. 


