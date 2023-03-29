<template>
	<section class="p-6 dark:bg-gray-800 dark:text-gray-50">
		<form novalidate="" action="" class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
			<fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
				<div class="space-y-2 col-span-full lg:col-span-1">
					<p class="font-medium">Information personnelle</p>
					<p class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
				</div>
				<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
					<div class="col-span-full sm:col-span-3">
						<label for="adresse" class="text-sm">adresse</label>
						<input id="adresse" type="text" placeholder="adresse" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900">
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="telephone" class="text-sm">telephone</label>
						<input id="telephone" type="text" placeholder="telephone" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900">
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="date_de_naissance" class="text-sm">date_de_naissance</label>
						<input id="date_de_naissance" type="text" placeholder="Email" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900">
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="bisness_unit" class="text-sm">bisness_unit</label>
						<input id="bisness_unit" type="text" placeholder="Email" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900">
					</div>
					
					<div class="col-span-full sm:col-span-2">
						<label for="poste" class="text-sm">poste</label>
						<input id="poste" type="text" placeholder="" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900">
					</div>
					<div class="col-span-full mt-5 sm:col-span-2">
						<button>
							Ajouter
						</button>
					</div>
				</div>
			</fieldset>
		</form>
	</section>
</template>
<script>
export default {
    name: "addProfile"
}
</script>