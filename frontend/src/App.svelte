<script lang="ts">
	import { Router, Link, Route } from 'svelte-routing'
	import Group from './routes/Group.svelte'
	import Groups from './routes/Groups.svelte'
	import Index from './routes/Index.svelte'
	import UserProfile from './lib/UserProfile.svelte'

	export let url = ''
</script>

<Router {url}>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/groups">Groups</Link>
	</nav>
	<div>
		<Route path="/groups/:id">
			<Group />
		</Route>
		<Route path="/groups">
			<Groups />
		</Route>
		<Route path="/">
			<Index />
		</Route>
	</div>
</Router>

<UserProfile />
