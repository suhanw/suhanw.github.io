import Head from 'next/head';
import style from './style';

export default () => {
	return (
		<>
			<Head>
				<title>MapMyCruise Preview</title>
			</Head>
			<article className={style.contentWrapper}>
				<h1>MapMyCruise</h1>
				<a className={style.cta} href="/mapmycruise">
					www.suhanwijaya.com/mapmycruise
				</a>
				<p>
					MapMyCruise is a full-stack web application inspired by MapMyRun. It utilizes Ruby on Rails on the
					backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.
				</p>

				<h2>Features and Implementation</h2>

				<h3>Single Page</h3>
				<p>
					MapMyCruise is a single page app that allows for quick navigation between its various components. As
					data is fetched from Rails, components are only updated when necessary.
				</p>

				<h3>Routes</h3>
				<p>
					Routes are stored at the database level associated with `user_id`. Route creators can freely edit
					and delete their own routes. Route creation is accomplished using Google Maps API. A user creates a
					route by choosing 2 points on a map (start and end), which sends a DirectionsService request to
					calculate the best route between those 2 points. A DirectionsRenderer object is initialized to
					receive the response and render the calculated route on the map. The user can choose to further
					customize the route by dragging along any point on the route. The route is finally persisted to the
					database as an encoded string that represents a Polyline object.
				</p>
				<figure>
					<img src="/images/mapmycruise-routes.gif" />
				</figure>

				<h3>Workouts</h3>
				<p>
					Workouts are associated with `user_id` and `route_id`. After planning a route, a user can log a
					workout with that route. Workout creators can freely edit and delete their own workouts.
				</p>
				<figure>
					<img src="/images/mymycruise-workouts.gif" />
				</figure>

				<h3>Friending</h3>
				<p>
					Friends are stored at the database level as a join table
					associating `friender_id` and `friendee_id`, with a `friend_status` flag. 'Friender' is a user who
					makes the friend request, whereas 'friendee' is the user who receives the request. A user can view
					existing friends, friend requests, and friend requests received from other users.
				</p>
				<figure>
					<img src="https://github.com/suhanw/map_my_cruise/raw/master/docs/README_gifs/friends.gif" />
				</figure>

				<h3>Activity Feed</h3>
				<p>
					The landing page upon login is a feed that displays the current user's as well as his/her friends'
					activities, which includes the creation of new routes, logging of new workouts, and new friendships.
					On the backend, an `activities` table is designed with polymorphic associations to
					the `routes`, `workouts`, and `friend_status` tables, to keep DRY code and enable scalability for
					future implementation of new "activities". The activity feed is implemented with infinite scroll to
					reduce page size for quicker loading, where newest activities are rendered at the top, and older
					activities are only fetched asynchronously and inserted into the page as the user scrolls towards
					the bottom.
				</p>
				<figure>
					<img src="https://github.com/suhanw/map_my_cruise/raw/master/docs/README_gifs/activity_feed.gif" />
				</figure>

				<h3>Comments</h3>
				<p>
					Comments are associated with `user_id` and `workout_id`. The associated comments are rendered when
					viewing a specific workout. Users can comment on workouts logged by other users.
				</p>
				<figure>
					<img src="https://github.com/suhanw/map_my_cruise/raw/master/docs/README_gifs/comments.gif" />
				</figure>

				<h3>Notifications</h3>
				<p>Real-time notification is accomplished using the Pusher API and WebSockets protocol.</p>
				<figure>
					<img src="https://github.com/suhanw/map_my_cruise/raw/master/docs/README_gifs/notifications.gif" />
				</figure>
			</article>
		</>
	);
};
