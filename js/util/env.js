// Used with permission under the MIT license from ZEIT's Next.js project.
// See license information at https://github.com/zeit/next.js

export default ("undefined" !== typeof window ? window.__ENV__ : process.env);
