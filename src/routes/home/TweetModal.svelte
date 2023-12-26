<script lang="ts">
	import { page } from '$app/stores';
	export let showTweetModal = false;
</script>

{#if showTweetModal}
	<div class="fixed inset-0 bg-black bg-opacity-25 flex justify-center z-10 h-full w-screen">
		<div class="w-[600px] p-0">
			<div class="bg-white rounded-2xl mt-12 h-fit">
				<div class="flex items-center flex-col pl-4">
					<div class="self-start">
						<button
							class="p-3 text-[15px] hover:bg-slate-200 rounded-full"
							on:click={() => (showTweetModal = false)}
						>
							&#10005;
						</button>
					</div>
					<form action="?/createPost" method="POST">
						<div class="flex self-start">
							<div class="flex flex-col">
								<div class="flex">
									<img
										src={$page.data.user.avatar}
										alt=""
										class="h-8 rounded-full self-start mr-8"
									/>
									<textarea placeholder="What's happening?" cols="60" rows="5" class="p-2" />
								</div>
								<div class="w-full border-gray-100 border-b-2 mt-6" />
							</div>
						</div>
						<div class="flex justify-end">
							<button
								class="mt-4 mr-6 self-end rounded-full bg-[#1d9bf0] py-2 px-4 text-white mb-4 hover:bg-[#1D88F0"
								>Tweet</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
{/if}
