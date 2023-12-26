<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	export let showSignupModal: boolean;

	export let data: SuperValidated<CreateUserSchema>;

	const { form, errors, enhance } = superForm(data, {
		resetForm: true,
		onResult: ({ result }) => {
			if (result.type === 'success') {
				showSignupModal = false;
				return;
			}
		}
	});
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
				<form
					method="POST"
					action="?/createUser"
					id="signupuser"
					class="w-full pl-16 pr-16"
					use:enhance
				>
					<div class="flex flex-col">
						<div class="relative flex flex-col items-center mb-8">
							<input
								type="text"
								name="full_name"
								placeholder="Full Name"
								class="w-full p-4 rounded border-[1px] border-slate-300"
								bind:value={$form.full_name}
							/>
							{#if $errors.full_name}
								<span class="block text-red-600 dark:text-red-500">{$errors.full_name}</span>
							{/if}
						</div>

						<div class="flex flex-col items-center mb-8">
							<input
								type="text"
								name="username"
								class="w-full p-4 rounded border-[1px] border-slate-300"
								placeholder="Username"
								bind:value={$form.username}
							/>
							{#if $errors.username}
								<span class="block text-red-600 dark:text-red-500">{$errors.username}</span>
							{/if}
						</div>
						<div class="flex flex-col items-center mb-8">
							<input
								type="password"
								name="password"
								class="w-full p-4 rounded border-[1px] border-slate-300"
								placeholder="Password"
								bind:value={$form.password}
							/>
							{#if $errors.password}
								<span class="block text-red-600 dark:text-red-500">{$errors.password}</span>
							{/if}
						</div>
						<div class="flex flex-col items-center mb-8">
							<input
								type="email"
								name="email"
								class="w-full p-4 rounded border-[1px] border-slate-300"
								placeholder="Email Address"
								bind:value={$form.email}
							/>
							{#if $errors.email}
								<span class="block text-red-600 dark:text-red-500">{$errors.email}</span>
							{/if}
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
