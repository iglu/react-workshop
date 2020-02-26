# Publish

We are now going a bit off-topic with React by talking about publishing our app. The easiest way to do that is probably by using some git repository hosting service (Github or Bitbucket) and some sort global deployment provider (Netlify). And yes since it's a bit off-topic, it comes it's own separate set of p rerequisites.

## Additional prerequisites

- Basic knowledge on Git
- Git installed
- account with Github (or Bitbucket)
- account with Netlify.

## Github/Bitbucket

In Github/Bitbucket create new repository
Copy git remote add origin git@domain:user/repo part.
Open your project folder in terminal and run these commands:

```
git init
git remote add origin git@domain:user/repo
git add .
git commit -m "initial commit"
git push -u origin master
```

## Netlify

Log into Netlify (create account when new to site)
When logged in, click "new site from Git" and follow the instructions.
Basic build settings set build command to `npm run build` and publish directory to `build/`
Click deploy site and it gets deployed.
