# Creating more pages

Replicate https://taltech.netlify.com site

Note: keep `/containers/index.ts` and `/components/index.ts` up-to-date for cleaner imports.

## Posts page

View https://taltech.netlify.com/posts page.

1. Create a new container in `src/containers` folder called Posts (Use dashboard as reference).
2. in App.tsx include newly created Posts container into router (/posts)
3. in Posts container get posts from api (Use dashboard as reference)

With this screen we need to create 1 new component called Card (displays image or video and content).

### Card component

1. Create `src/components/Card/Card.tsx` file and import React and Card.css file
2. Add JSX, HTML for Card is:

```HTML
<div class="card">
      <div class="card__cover">
          <img src="imageUrl" alt="" />
    </div>
      <div class="card__body">children</div>
</div>
```

3. Add video support (first blog post has videoUrl property)

```HTML
<div className="card__cover">
          <video autoPlay loop>
            <source src="videoUrl" type="video/mp4" />
          </video>
</div>
```

3. Use Card component in Posts page.

## Members page

View https://taltech.netlify.com/members page.

1. Create a new container in `src/containers` folder called Members (Use dashboard as reference)
2. in App.tsx include newly created Members container into router (/members)
3. Get posts from api (Use dashboard as reference)

With this page we need to create 2 new components, Avatar (for Profile image) and Member (contains avatar, name and occupation) component .

### Avatar component

1. Create `src/components/Avatar/Avatar.tsx` file and import React and Avatar.css file

2. Add JSX. HTML for Avatar is:

```HTML
   <div class="avatar">
      <img src="imageUrl" alt="Name" />
    </div>
```

3. Add a function where members without profile image will have their name initials displayed. JS function for this is

```JS
    const initials = name.match(/\b\w/g) || [];
    const initialString = `${initials[0]}${initials[1]}`;
```

and the HTML for avatar with initials is (img element is being replaced):

```HTML
<div class="avatar">
    <div className="avatar__initials">FL</div>
</div>
```

### Member component

1. Create `src/components/Member/Member.tsx` file and import React and Member.css file

```HTML
    <div className="member">
      <!-- Replace this comment with Avatar component  -->
      <h2>firstName lastName</h2>
      <p>occupation</p>
    </div>
```

3. Use Card component in Members page.

## Events and Gallery page.

1. Create Events and Gallery page based on existing pages.
2. Update routes in App.tsx and add new Nav links
3. Add data from API (api.ts)

## Subpages for Events, Gallery, Members

1. Create Subpages for Events, Gallery, Members based on existing post page.
2. Update routes in App.tsx
3. Link Main pages cards with subpages and pass required params like id with Link component provided by react-router-dom.
4. Add data from API (api.ts)

## Modal

1. Add React Modal library (https://github.com/reactjs/react-modal)
2. Add modal to "Add New" button
3. Modal should contain a form with inputs and a submit button
4. Submit should create a new Blog Post
