import{a as n,t as s}from"../chunks/disclose-version.CGgwR5Q_.js";import{l,s as r}from"../chunks/props._SqaxKkw.js";import{M as d}from"../chunks/mdsvex-blog.CunRRW7J.js";var c=s('<p>daisyUI 5 is in development and it will be released after Tailwind CSS 4 is released. Here’s what you can expect from daisyUI 5 and how it will be different from the current version.</p> <h1 id="compatibility-with-tailwind-css-4"><a aria-hidden="true" tabindex="-1" href="#compatibility-with-tailwind-css-4"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Compatibility with Tailwind CSS 4</h1> <p>Tailwind CSS 4 is in development and I can’t wait for it to be released. You can read the <a href="https://tailwindcss.com/blog/tailwindcss-v4-alpha" rel="nofollow" target="_blank">official announcement</a> on the Tailwind CSS blog, but here are some of the highlights:</p> <ul><li>New engine which is faster, smaller and more efficient</li> <li>Tailwind CSS 4 will use modern CSS features like <code>@layer</code>, <code>@property</code>, <code>color-mix()</code>, <code>@starting-style</code> , anchor positioning, container queries, and more</li> <li>Automatic content detection: No need for listing all your markup files in a config file. Tailwind CSS will automatically detect the class names in all your markup files and generate the necessary CSS.</li> <li>No need for <code>tailwind.config.js</code> file. Everything will be done directly in the CSS file.</li> <li>Tailwind CSS 4 will use CSS variables for colors and all other tokens.</li></ul> <p>Read more at <a href="https://tailwindcss.com/blog/tailwindcss-v4-alpha" rel="nofollow" target="_blank">Tailwind CSS blog</a></p> <h1 id="upcoming-tailwind-css-4-plugins-api"><a aria-hidden="true" tabindex="-1" href="#upcoming-tailwind-css-4-plugins-api"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Upcoming Tailwind CSS 4 plugins API</h1> <p>Plugins API for Tailwind CSS 4 is still in development. Currently it’s not possible to use daisyUI with the alpha version of Tailwind CSS 4, but as soon as the new API is released, we will update daisyUI to be compatible with it.</p> <p>Plugins in Tailwind CSS 3 and below were expected to be CSS-in-JS. But it is expected to be pure CSS files in Tailwind CSS 4.</p> <p><img src="https://img.daisyui.com/images/blog/tailwind-css-4-plugins-api-syntax-tweet.png" alt="tailwind css 4 plugins api syntax tweet"></p> <p>This will make it easier to use daisyUI as a plugin in your Tailwind CSS project, and it will also make it easier for us to maintain and update daisyUI since it will be a pure CSS file, without any build process to convert CSS to CSS-in-JS.</p> <blockquote><p>With the current alpha version of Tailwind CSS 4, technically you can import the whole CSS file of daisyUI in your project but it won’t act as a Tailwind CSS plugin.<br> Which means it will include all unused class names in your production CSS file.<br> And you won’t be able to use Tailwind CSS responsive prefixes like <code>lg:</code> with daisyUI class names. Because of this, it’s important to use daisyUI as a Tailwind CSS plugin.<br> So let’s wait for the new Tailwind CSS 4 plugins API to be released.</p></blockquote> <h1 id="no-js-config"><a aria-hidden="true" tabindex="-1" href="#no-js-config"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>No JS config</h1> <p><img src="https://img.daisyui.com/images/blog/rip-tailwind-config-js.jpg" alt="Tailwind CSS 4 config"></p> <p>If Tailwind CSS 4 is going to allow importing CSS files as plugins, we won’t need a JS config file for daisyUI. Everything will be done in the CSS file.</p> <p>You will be able to include the daisyUI CSS file as a Tailwind CSS plugin using the CSS <code>@import</code> rule.</p> <h1 id="pure-css-files-for-each-component-and-each-theme"><a aria-hidden="true" tabindex="-1" href="#pure-css-files-for-each-component-and-each-theme"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Pure CSS files for each component and each theme</h1> <p>Previously, daisyUI was using a build process to convert the CSS files to CSS-in-JS. But with the upcoming Tailwind CSS 4 plugins API, we will be able to include pure CSS files for each component and each theme in the daisyUI source code.<br> This will make it possible to use specific components of daisyUI in your project without including the whole CSS file.</p> <h1 id="native-css-nesting"><a aria-hidden="true" tabindex="-1" href="#native-css-nesting"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Native CSS nesting</h1> <p>Native CSS nesting is now supported in all modern browsers.</p> <p>Instead of using Post CSS nesting, we will use native CSS nesting in the upcoming version of daisyUI. This will reduce the size of the CSS files dramatically.</p> <h1 id="no-forced-color-format-conversion"><a aria-hidden="true" tabindex="-1" href="#no-forced-color-format-conversion"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>No forced color format conversion</h1> <p>Colors in Tailwind CSS 4 will be defined as CSS variables and Tailwind CSS will use CSS <code>color-mix()</code> function to change the opacity of the colors. This means we won’t need to convert the colors to a specific format to be used in Tailwind CSS.<br> daisyUI built-in themes will keep using OKLCH color format as it is currently the most ergonomic P3 color format, but you can use any color format for your custom themes and we won’t convert them to OKLCH in the production CSS file just to be compatible with Tailwind CSS opacity utilities.</p> <p>A challenge for daisyUI 5 will be to generate the optional colors (like <code>*-content</code>) as before because:</p> <ul><li>We’re not going to process the color values using JS in the build time if we’re not going to use pure CSS files</li> <li>CSS <code>color-contrast()</code> function is <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast" rel="nofollow" target="_blank">not supported in browsers</a> yet</li> <li>CSS <code>color-contrast()</code> function is <a href="https://github.com/parcel-bundler/lightningcss/issues/99" rel="nofollow" target="_blank">not supported in Lightning CSS</a> (The CSS parser used by Tailwind CSS 4) yet.</li></ul> <h1 id="less-or-zero-dependencies"><a aria-hidden="true" tabindex="-1" href="#less-or-zero-dependencies"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Less (or zero?) dependencies</h1> <p>daisyUI currently uses 4 dependencies:</p> <ul><li><code>postcss-js</code> to convert CSS to CSS-in-JS because Tailwind CSS 3 and below only accept CSS-in-JS syntax as plugins</li> <li><code>culori</code> to convert colors</li> <li><code>picocolors</code> for console colors</li> <li><code>css-selector-tokenizer</code> for adding prefixes</li></ul> <p>If daisyUI package is going to include pure CSS files only, we can safely remove all these dependencies.<br> I’m not still sure how we can add prefixes to the daisyUI class names if we’re not going to process the styles using Post CSS, But I will find a way.</p> <h1 id="container-queries-for-responsive-components"><a aria-hidden="true" tabindex="-1" href="#container-queries-for-responsive-components"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Container queries for responsive components</h1> <p>Container queries are now supported in all modern browsers. We will use them for components that need to be responsive based on their container width by default.</p> <h1 id="css-popover-api-and-anchor-positioning"><a aria-hidden="true" tabindex="-1" href="#css-popover-api-and-anchor-positioning"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>CSS Popover API and anchor positioning</h1> <p><img src="https://img.daisyui.com/images/blog/daisyui-5-dropdown-popover.jpg" alt="daisyUI 5 dropdown popover API"></p> <p>We’ve been using CSS <code>:focus</code> or <code>&lt;details&gt;</code> element for dropdowns in daisyUI as they were the best no-JS options we had at the time. The problem with them is, without using JS there’s no way to close a dropdown by both clicking outside OR clicking the button. You had to choose one.<br> But now we have a new option: Native HTML <a href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API" rel="nofollow" target="_blank">popover API</a> is now <a href="https://caniuse.com/mdn-api_htmlelement_popover" rel="nofollow" target="_blank">supported in all modern browsers</a> and we will use it for dropdowns in daisyUI. There’s also <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning" rel="nofollow" target="_blank">CSS anchor positioning</a> which can help about the positioning of the dropdowns, preventing them from going out of the viewport.</p> <h1 id="design-improvements"><a aria-hidden="true" tabindex="-1" href="#design-improvements"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Design improvements</h1> <p>Most components will have small design improvements. Not going to break your current design, but will make them all look better.</p> <h1 id="new-components"><a aria-hidden="true" tabindex="-1" href="#new-components"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>New components</h1> <p>There will be new components in daisyUI 5. I will announce them when they are ready.</p> <h1 id="themes"><a aria-hidden="true" tabindex="-1" href="#themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Themes</h1> <p>daisyUI currently has 32 built-in themes. Probably we will have even more built-in themes in daisyUI 5.</p> <p>And each of the existing themes will be a simple CSS file that you can include in your project (or you can include them all using one import rule). It feels good when everything is simple a CSS file, right?</p> <h1 id="smaller-css-size"><a aria-hidden="true" tabindex="-1" href="#smaller-css-size"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Smaller CSS size</h1> <p><img src="https://img.daisyui.com/images/blog/css-file-size-daisyui-5.jpg" alt="Reduce Tailwind CSS file size"></p> <p>This year a lot of new CSS features got available in all modern browsers. And with the new Tailwind CSS 4 changes we will be able to make daisyUI styles simpler and the CSS files smaller.</p> <h1 id="customizable-sizing-for-components"><a aria-hidden="true" tabindex="-1" href="#customizable-sizing-for-components"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Customizable sizing for components</h1> <p>We will use CSS variables for the size value of component. This will make it easier to customize the size of all components in your project by changing a few CSS variables, instead of adding utility classes to each component.</p> <p>This feature will give you more control over the size of the components and will make it even easier to have full control over the design of your project.</p> <h1 id="backward-compatibility"><a aria-hidden="true" tabindex="-1" href="#backward-compatibility"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Backward compatibility</h1> <p>daisyUI 5 will be compatible with Tailwind CSS 4 and all modern browsers.</p> <p>daisyUI 4 will still be available for those who can’t upgrade to Tailwind CSS 4 or if they want to support old browsers.</p> <p>We will make sure that the upgrade process from daisyUI 4 to daisyUI 5 is as smooth as possible, and we will provide a migration guide.</p> <h1 id="conclusion"><a aria-hidden="true" tabindex="-1" href="#conclusion"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Conclusion</h1> <p>daisyUI 5 will be a major update, it will adapt to the new features of Tailwind CSS 4 and the new CSS features that are now available in all modern browsers. I’m excited for the release of Tailwind CSS 4 and I will make sure that daisyUI 5 is going to be ready as soon as possible after the release of Tailwind CSS 4.</p> <p>Subscribe to the daisyUI newsletter to get notified about the updates.</p>',1);const p={title:"What to expect from daisyUI 5?",desc:"An overview of of daisyUI 5 upcoming changes and features",published:!0,date:"2024-07-02T00:00:00.000Z",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/daisyui-5-flowers.png",tags:["daisyUI"]};function f(e,i){const o=l(i,["children","$$slots","$$events","$$legacy"]);d(e,r(()=>o,p,{children:(a,h)=>{var t=c();n(a,t)},$$slots:{default:!0},$$legacy:!0}))}export{f as component};
