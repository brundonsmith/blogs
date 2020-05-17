
# What is this?

I was inspired by a [comment](https://news.ycombinator.com/item?id=23206075) 
on Hacker News saying that blogs are hard to find these days, and in particular
by another commenter who suggested this is because of SEO. I've seen lots of 
great little blogs by real people, who aren't simply gaming 
the SEO metrics, and I wanted to make it easier for people to find those sorts
of things.

To start out I listed some that I knew off the top of my head (including my 
own, of course), and I also quickly scrolled through the top comments here: 
https://news.ycombinator.com/item?id=21100377 and added the ones that seemed 
good.

# Contributions

I'm actively soliciting contributions to the list and/or help with tagging. 
Additionally, if your blog is on the list and you'd like it not to be, just let
me know and I'll remove it.

As for additions: I reserve all right to decide what does and doesn't get 
allowed in. This isn't only for tech (it could use a lot more non-tech, in 
fact!), but it is specifically for small, personal, for-their-own-sake blogs.
Not corporate blogs, not for-profit blogs. I'll also tend to deny, anything 
heavily professional that leans too far towards "digital resume".

Edits, additions, and removal requests can take the form of pull-requests or 
bug reports.

# Project layout

This site is statically-generated so it can be hosted on GitHub Pages. The blog
data lives in `src/blogs.json` (this is probably all you care about). 
**Before committing, please `npm run build` to rebuild the HTML files.** These
will end up under `dist/`, which is the public-facing static site.

# Future plans

Assuming this gets some traction, I'd like to add:
- Tags tags tags!
- Better styling
- RSS shortcuts on each blog listing
- More metadata/excerpts/preview stuff for each listing

And of course, feel free to submit a pull request if you feel inspired to add
any of these!