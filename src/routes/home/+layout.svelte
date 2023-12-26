<script lang="ts">
	import '../../app.css';
	import { page } from '$app/stores';
	import { Input } from 'postcss';
	import TweetModal from './TweetModal.svelte';

	const navigation = [
		{
			label: 'Home',
			href: '/',
			icon: {
				path: 'M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z'
			}
		},
		{
			label: 'Explore',
			href: '/',
			icon: {
				path: 'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z'
			}
		},
		{
			label: 'Notifications',
			href: '/',
			icon: {
				path: 'M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z'
			}
		},
		{
			label: 'Messages',
			href: '/',
			icon: {
				path: 'M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z'
			}
		},
		{
			label: 'Lists',
			href: '/',
			icon: {
				path: 'M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z'
			}
		},
		{
			label: 'Bookmarks',
			href: '/',
			icon: {
				path: 'M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z'
			}
		},
		{
			label: 'Communities',
			href: '/',
			icon: {
				path: 'M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z'
			}
		},
		{
			label: 'Verified',
			href: '/',
			icon: {
				path: 'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z'
			}
		},
		{
			label: 'Profile',
			href: '/',
			icon: {
				path: 'M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z'
			}
		},
		{
			label: 'More',
			href: '/',
			icon: {
				path: 'M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z'
			}
		}
	];

	let showLogoutDropdown = false;
	let showTweetModal = false;

	function toggleLogout() {}

	const ellipsis =
		'M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z';
</script>

{#if showTweetModal}
	<TweetModal bind:showTweetModal />
{/if}

<div class="flex flex-auto w-screen h-full">
	<div class="w-1/4 h-screen border-r-[1px]">
		<div class="flex justify-center h-full w-full">
			<header class="flex flex-col px-4 py-4 h-full">
				<div class="flex flex-col h-full">
					<nav class="flex flex-col items-start h-full" data-sveltekit-reload>
						<svg
							class="fill-[#1d9bf0] stroke-3 h-8 mb-4 hover:cursor-pointer"
							href="/home"
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 512 512"
							><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
							/></svg
						>
						<div class="flex flex-col mb-4">
							{#each navigation as nav}
								<div
									class="flex items-center hover:rounded-full hover:bg-gray-200 hover:cursor-pointer active:font-black px-3 py-2 gap-5 mb-1"
								>
									<svg
										class="h-6"
										xmlns="http://www.w3.org/2000/svg"
										height="1em"
										viewBox="0 0 576 512"
									>
										<path d={nav.icon?.path} />
									</svg>
									<a class="active:font-black focus:font-black text-lg" href={nav.href}
										>{nav.label}</a
									>
								</div>
							{/each}
						</div>
						<div class="flex w-full">
							<button
								class="text-center w-full rounded-full bg-[#1d9bf0] hover:bg-[#1D88F0] duration-300 px-6 py-3 text-white text-lg"
								on:click={() => (showTweetModal = true)}>Tweet</button
							>
						</div>
					</nav>
					<div
						class="flex flex-col items-center w-full hover:rounded-full hover:bg-gray-200 px-5 py-2 hover:cursor-pointer"
					>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							class="relative inline-block"
							on:click={() => (showLogoutDropdown = !showLogoutDropdown)}
							class:show={showLogoutDropdown}
						>
							<div class="flex items-center gap-5">
								{#if showLogoutDropdown}
									<div
										class="absolute z-[3] bottom-16 w-[150%] hover:rounded-2xl rounded-2xl shadow-xl"
									>
										<div
											class="hover:bg-slate-100 hover:rounded-2xl rounded-2xl transition duration-300"
										>
											<a
												href="auth/logout"
												class="text-black block no-underline p-4 font-bold text-sm"
												>Logout @{$page.data.user.username}</a
											>
										</div>
									</div>
								{/if}
								<img src={$page.data.user.avatar} alt="Avatar" class="h-12 w-12 rounded-full" />
								<div class="flex flex-col pr-10">
									<span class="font-bold text-sm">{$page.data.user.name}</span>
									<span class="text-sm text-slate-400">@{$page.data.user.username}</span>
								</div>
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
										<path d={ellipsis} />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	</div>
	<slot />
</div>
