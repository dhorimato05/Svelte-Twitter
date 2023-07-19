<script lang="ts">
	import '../../app.css';
	import SignUpModal from './SignUpModal.svelte';
	let showSignupModal = false;

	const footerLinks = [
		{ label: 'About', href: '/' },
		{ label: 'Help Center', href: '/' },
		{ label: 'Terms of Service', href: '/' },
		{ label: 'Privacy Policy', href: '/' },
		{ label: 'Cookie Policy', href: '/' },
		{ label: 'Accessibility', href: '/' },
		{ label: 'Ads Info', href: '/' },
		{ label: 'Blog', href: '/' },
		{ label: 'Status', href: '/' },
		{ label: 'Careers', href: '/' },
		{ label: 'Brand Resources', href: '/' },
		{ label: 'Advertising', href: '/' },
		{ label: 'Marketing', href: '/' },
		{ label: 'Twitter for Business', href: '/' },
		{ label: 'Developers', href: '/' },
		{ label: 'Directory', href: '/' },
		{ label: 'Settings', href: '/' }
	];
</script>

<SignUpModal bind:showSignupModal />

<div class="flex w-full h-full mb-4">
	<div class="w-[54.5%]">
		<img
			src="src/lib/images/twitter-splash-page.png"
			alt="Twitter Splash Page"
			class="w-full h-full"
		/>
	</div>
	<div class="flex w-auto justify-center items-center h-[50vh]">
		<div class="flex flex-col w-full p-9 justify-center">
			<div>
				<svg
					class="fill-[#1d9bf0] stroke-3 h-14 pb-3"
					xmlns="http://www.w3.org/2000/svg"
					height="1em"
					viewBox="0 0 512 512"
					><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
						d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
					/></svg
				>
			</div>
			<div class="mt-8 mb-6">
				<h1 class="text-[64px] font-extrabold tracking-wider">Happening Now</h1>
			</div>
			<div>
				<span class="text-[31px] font-bold tracking-wider mb-8">Join Svitter today.</span>
			</div>
			<div class="flex mt-4">
				<div class="absolute">
					<div>
						<button
							class="flex justify-center items-center rounded-3xl border border-slate-300 max-w-sm relative px-12 py-[10px] w-[300px] text-[15px] gap-[2px] hover:bg-slate-200"
						>
							<svg
								class="pr-[1px]"
								xmlns="http://www.w3.org/2000/svg"
								height="1em"
								viewBox="0 0 488 512"
								><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
									d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
								/></svg
							>
							<span>Sign up with Google</span>
						</button>
					</div>
					<div>
						<button
							class="flex justify-center items-center rounded-3xl border border-slate-300 max-w-sm relative px-12 py-[10px] w-[300px] text-[15px] gap-[2px] hover:bg-slate-200 mt-4"
						>
							<svg
								class="pr-[1px]"
								xmlns="http://www.w3.org/2000/svg"
								height="1.1em"
								viewBox="0 0 384 512"
								><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
									d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
								/></svg
							>
							<span class="font-bold">Sign up with Apple</span>
						</button>
					</div>
					<div class="flex justify-center text-center items-center w-full">
						<div class="w-2/3 border-b-2 border-slate-100 mt-4" />
						<div class="pt-3 px-4">or</div>
						<div class="w-2/3 border-b-2 border-slate-100 mt-4" />
					</div>
					<div class="absolute">
						<button
							class="flex justify-center items-center rounded-3xl bg-[#1d9bf0] hover:bg-[#1D88F0] max-w-sm relative px-12 py-[10px] w-[300px] text-[15px] gap-[2px] mt-4 mb-2"
							on:click={() => (showSignupModal = true)}
						>
							<span class="font-bold text-white">Create account</span>
						</button>
						<div>
							<span class="text-[11px] relative leading-[1px]"
								>By signing up, you agree to the <a
									class="text-[#1d9bf0] hover:underline"
									href="/auth">Terms of Service</a
								>
								and
								<a class="text-[#1d9bf0] hover:underline" href="/auth">Privacy Policy</a>, including
								<a class="text-[#1d9bf0] hover:underline" href="/auth">Cookie Use.</a></span
							>
						</div>
					</div>
					<div class="flex flex-col absolute mt-[48px]">
						<span class="relative mt-28 font-extrabold text-[17px]">Already Have an account?</span>
						<div>
							<button
								class="flex justify-center items-center rounded-3xl border border-slate-300 max-w-sm relative px-12 py-[10px] w-[300px] text-[15px] gap-[2px] hover:bg-slate-200 mt-4"
							>
								<span class="font-bold text-[#1d9bf0] hover:bg-[#E7FAFF]">Sign in</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<footer class="flex flex-col items-center justify-center">
	<ul class="flex gap-4 pt-4 px-4 text-sm">
		{#each footerLinks as footerLink}
			<span class="text-[#536471] hover:underline"
				><a href={footerLink.href}>{footerLink.label}</a></span
			>
		{/each}
	</ul>
	<div>
		<span class="text-sm text-[#536471]">&copy; 2023 Svitter</span>
	</div>
</footer>
