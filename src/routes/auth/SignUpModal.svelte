<script lang="ts">
	export let showSignupModal: boolean;
</script>

{#if showSignupModal}
	<div
		class="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-10 h-full w-screen"
	>
		<div class="w-[600px] p-0">
			<div class="bg-white p-0 rounded-2xl flex flex-col h-[640px]">
				<div class="flex items-center pl-8 pt-2 pb-8">
					<div class="items-center">
						<button
							class="p-3 text-[15px] hover:bg-slate-200 rounded-full"
							on:click={() => (showSignupModal = false)}
						>
							&#10005;
						</button>
						<span class="pl-2 text-[20px] font-bold pb-4">Step 1 of 1</span>
					</div>
				</div>

				<div class="flex items-start pb-8">
					<h1 class="pl-16 text-[31px] font-extrabold">Create your account</h1>
				</div>
				<form method="POST" action="?/createUser" class="w-full pl-16 pr-16">
					<div class="flex flex-col">
						<div class="relative flex items-center mb-8">
							<input
								type="text"
								name="full-name"
								placeholder="Full Name"
								class="w-full p-4 rounded border-[1px] border-slate-300"
							/>
							<label for="full-name" class="pl-2 absolute text-slate-500 z-[-1]">Full Name</label>
						</div>
						<div class="flex items-center mb-8">
							<input
								type="text"
								name="username"
								class="w-full p-4 rounded border-[1px] border-slate-300"
								placeholder="Username"
							/>
						</div>
						<div class="flex items-center mb-8">
							<input
								type="password"
								name="password"
								class="w-full p-4 rounded border-[1px] border-slate-300"
								placeholder="Password"
							/>
						</div>
						<div class="flex items-center mb-8">
							<input
								type="email"
								name="email"
								class="w-full p-4 rounded border-[1px] border-slate-300"
								placeholder="Email Address"
							/>
						</div>
						<div class="flex items-center justify-center">
							<button
								type="submit"
								class="flex justify-center items-center rounded-3xl bg-[#1d9bf0] hover:bg-[#1D88F0] max-w-sm relative px-12 py-[10px] w-full text-[15px] gap-[2px] mt-4 mb-2"
							>
								<span class="font-bold text-white">Create account</span>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}
