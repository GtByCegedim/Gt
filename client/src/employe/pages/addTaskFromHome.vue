<template>
	<section class="p-6 dark:bg-gray-800 h-full dark:text-gray-50">
		<h1 class="text-[30px] font-bold text-indigo-400">Créer une Tache</h1>
		<form  class="container flex flex-col mx-auto space-y-12 ng-untouched max-h-full">
			<fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
				<div class="space-y-2 col-span-full lg:col-span-1">
					<p class="font-medium">Choisissez le Projet </p>
					<p class="text-xs">et Ajouter une nouvele tache</p>
				</div>
				<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    
					<div class="col-span-full sm:col-span-3">
						<label for="firstname" class="text-sm">titre</label>
						<input id="firstname" type="text" placeholder="Titre de tache" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900">
					</div>
					
					<div class="col-span-full sm:col-span-3">
						<label for="email" class="text-sm">Email</label>
						<input id="email" type="email" placeholder="Email" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900">
					</div>
					<div class="col-span-full">
						<label for="bio" class="text-sm">Description</label>
						<textarea id="bio" placeholder="" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
					</div>
					<div class="col-span-full sm:col-span-2">
						<label for="city" class="text-sm">durée</label>
						<input id="city" type="text" placeholder="" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900">
					</div>
					<div class="col-span-full sm:col-span-2">
						<label for="state" class="text-sm">Heures / Points</label>
						<input id="state" type="text" placeholder="" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900">
					</div>
					<div class="col-span-full sm:col-span-2">
						<label for="zip" class="text-sm">Projet</label>
						<input id="zip" type="select" placeholder="" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900">
					</div>
				</div>
			</fieldset>
		
		</form>
	</section>
</template>