<script lang="ts">
	import { onMount } from 'svelte'

	function loginWithGoogle() {
		window.location.href = 'http://localhost:3000/auth/google'
	}

	let user: any | null = null

	onMount(async () => {
		try {
			const response = await fetch('http://localhost:3000/auth/user', { credentials: 'include' })
			if (response.ok) {
				user = await response.json()
			} else {
				console.log('User not authenticated')
			}
		} catch (err) {
			console.error('Error fetching user data', err)
		}
	})
</script>

{#if user}
	<div>Hello, {user.name.givenName}!</div>
{:else}
	<button type="button" class="btn btn-info" on:click={loginWithGoogle}>Log in with Google</button>
{/if}
