_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{Qetd:function(e,t,s){"use strict";var i=Object.assign.bind(Object);e.exports=i,e.exports.default=e.exports},RmTU:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mapmycruise-preview",function(){return s("laee")}])},laee:function(e,t,s){"use strict";s.r(t);var i=s("nKUr"),r=s("c0aP"),a=s.n(r);t.default=function(){return Object(i.jsxs)("article",{className:a.a.contentWrapper,children:[Object(i.jsx)("h1",{children:"MapMyCruise"}),Object(i.jsx)("a",{className:a.a.cta,href:"/mapmycruise",children:"www.suhanwijaya.com/mapmycruise"}),Object(i.jsx)("p",{children:"MapMyCruise is a full-stack web application inspired by MapMyRun. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend."}),Object(i.jsx)("h2",{children:"Features and Implementation"}),Object(i.jsx)("h3",{children:"Single Page"}),Object(i.jsx)("p",{children:"MapMyCruise is a single page app that allows for quick navigation between its various components. As data is fetched from Rails, components are only updated when necessary."}),Object(i.jsx)("h3",{children:"Routes"}),Object(i.jsx)("p",{children:"Routes are stored at the database level associated with\xa0`user_id`. Route creators can freely edit and delete their own routes. Route creation is accomplished using Google Maps API. A user creates a route by choosing 2 points on a map (start and end), which sends a DirectionsService request to calculate the best route between those 2 points. A DirectionsRenderer object is initialized to receive the response and render the calculated route on the map. The user can choose to further customize the route by dragging along any point on the route. The route is finally persisted to the database as an encoded string that represents a Polyline object."}),Object(i.jsx)("figure",{children:Object(i.jsx)("img",{src:"/images/mapmycruise-routes.gif"})}),Object(i.jsx)("h3",{children:"Workouts"}),Object(i.jsx)("p",{children:"Workouts are associated with\xa0`user_id`\xa0and\xa0`route_id`. After planning a route, a user can log a workout with that route. Workout creators can freely edit and delete their own workouts."}),Object(i.jsx)("figure",{children:Object(i.jsx)("img",{src:"/images/mymycruise-workouts.gif"})}),Object(i.jsx)("h3",{children:"Friending"}),Object(i.jsx)("p",{children:"Friends are stored at the database level as a join table associating\xa0`friender_id`\xa0and\xa0`friendee_id`, with a\xa0`friend_status`\xa0flag. 'Friender' is a user who makes the friend request, whereas 'friendee' is the user who receives the request. A user can view existing friends, friend requests, and friend requests received from other users."}),Object(i.jsx)("figure",{children:Object(i.jsx)("img",{src:"https://github.com/suhanw/map_my_cruise/raw/master/docs/README_gifs/friends.gif"})}),Object(i.jsx)("h3",{children:"Activity Feed"}),Object(i.jsx)("p",{children:"The landing page upon login is a feed that displays the current user's as well as his/her friends' activities, which includes the creation of new routes, logging of new workouts, and new friendships. On the backend, an\xa0`activities`\xa0table is designed with polymorphic associations to the\xa0`routes`,\xa0`workouts`, and\xa0`friend_status`\xa0tables, to keep DRY code and enable scalability for future implementation of new \"activities\". The activity feed is implemented with infinite scroll to reduce page size for quicker loading, where newest activities are rendered at the top, and older activities are only fetched asynchronously and inserted into the page as the user scrolls towards the bottom."}),Object(i.jsx)("figure",{children:Object(i.jsx)("img",{src:"https://github.com/suhanw/map_my_cruise/raw/master/docs/README_gifs/activity_feed.gif"})}),Object(i.jsx)("h3",{children:"Comments"}),Object(i.jsx)("p",{children:"Comments are associated with\xa0`user_id`\xa0and\xa0`workout_id`. The associated comments are rendered when viewing a specific workout. Users can comment on workouts logged by other users."}),Object(i.jsx)("figure",{children:Object(i.jsx)("img",{src:"https://github.com/suhanw/map_my_cruise/raw/master/docs/README_gifs/comments.gif"})}),Object(i.jsx)("h3",{children:"Notifications"}),Object(i.jsx)("p",{children:"Real-time notification is accomplished using the Pusher API and WebSockets protocol."}),Object(i.jsx)("figure",{children:Object(i.jsx)("img",{src:"https://github.com/suhanw/map_my_cruise/raw/master/docs/README_gifs/notifications.gif"})})]})}}},[["RmTU",0,1,2]]]);