// priority 10

const itemTypes = ["ingots", "plates", "rods", "gears"]

//Id's of things to replace furnace -> crucible
const furnacent = [
  "integrateddynamics:crafting/part_machine_reader",
  "gtceu:shaped/multi_furnace",
  "integrateddynamics:crafting/part_machine_writer",
  "gtceu:shaped/steam_boiler_coal_bronze",
  "gtceu:shaped/steam_boiler_coal_steel",
  "railcraft:fluid_fueled_firebox",
  "enderio:alloy_smelter",
  "minecraft:blast_furnace",
  "gtceu:shaped/steam_furnace_bronze",
  "gtceu:shaped/steam_alloy_smelter_bronze",
  "gtceu:shaped/electric_blast_furnace",
  "enderio:stirling_generator",
  "railcraft:steam_oven",
  "enderio:primitive_alloy_smelter",
  "ae2:network/blocks/energy_vibration_chamber",
  "railcraft:tunnel_bore",
  "integrateddynamics:crafting/coal_generator"
]
const tfcMetallics = [
  "bismuth",
  "bismuth_bronze",
  "black_bronze",
  "bronze",
  "brass",
  "copper",
  "gold",
  "nickel",
  "rose_gold",
  "silver",
  "tin",
  "zinc",
  "sterling_silver",
  "wrought_iron",
  "steel",
  "black_steel",
  "blue_steel",
  "red_steel",
  "tungsten_carbide",
  "damascus_steel",
  "tungsten_steel",
  "cobalt_brass",
  "vanadium_steel",
  "ultimet",
  "invar",
  "aluminium",
  "titanium"
]
const tfcShipTypes = [
  "acacia",
  "ash",
  "aspen",
  "birch",
  "blackwood",
  "chestnut",
  "douglas_fir",
  "hickory",
  "kapok",
  "mangrove",
  "maple",
  "oak",
  "palm",
  "pine",
  "rosewood",
  "sequoia",
  "spruce",
  "sycamore",
  "white_cedar",
  "willow"
]
let replaceRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.replaceOutput({ type: "minecraft:crafting_shaped" }, "minecraft:torch", "tfc:torch")

  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:torch", "tfc:torch")
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:anvil", "tfc:metal/anvil/wrought_iron")
  event.replaceInput({ type: "minecraft:crafting_shapeless" }, "minecraft:slime_ball", "tfc:glue")
  event.replaceInput({ mod: "create" }, "minecraft:iron_ingot", "gtceu:wrought_iron_ingot")

  event.replaceInput({ mod: "create" }, "#forge:plates/iron", "gtceu:wrought_iron_plate")
  event.replaceInput({ mod: "railways" }, "minecraft:iron_ingot", "tfc:metal/ingot/cast_iron")
  event.replaceInput({ mod: "railcraft" }, "minecraft:iron_ingot", "tfc:metal/ingot/cast_iron")
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:slime_ball", "tfc:glue")
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:cobblestone_slab", "#forge:slabs/cobblestone")
  //remove furnace existance
  furnacent.forEach((furnace) => {
    event.replaceInput(furnace, "minecraft:furnace", "tfc:crucible")
  })
  //Simpleplanes
  event.replaceInput({ mod: "simpleplanes" }, "minecraft:iron_axe", "tfc:metal/axe/steel")
  event.replaceInput({ mod: "simpleplanes" }, "minecraft:iron_pickaxe", "tfc:metal/pickaxe/steel")
  event.replaceInput({ id: "simpleplanes:furnace_engine" }, "minecraft:blast_furnace", "railcraft:solid_fueled_firebox")
  event.replaceInput({ id: "simpleplanes:liquid_engine" }, "minecraft:blast_furnace", "railcraft:liquid_fueled_firebox")
  event.replaceInput({ id: "simpleplanes:electric_engine" }, "#forge:ingots/copper", "immersiveengineering:coil_lv")
  event.replaceInput({ id: "simpleplanes:supply_crate" }, "minecraft:barrel", "#tfc:barrels")

  //Corail

  event.replaceInput({ mod: "tombstone" }, "minecraft:stone", "tfc:rock/raw/marble")
  //Apotheosis
  event.replaceInput({ mod: "apotheosis" }, "minecraft:smooth_stone", "#forge:smooth_stone")
  event.replaceInput({ mod: "apotheosis" }, "minecraft:honeycomb_block", "firmalife:jar/honey")
  event.replaceInput({ mod: "apotheosis" }, "minecraft:iron_axe", "tfc:metal/axe/red_steel")
  event.replaceInput({ mod: "apotheosis" }, "minecraft:iron_pickaxe", "tfc:metal/pickaxe/blue_steel")
  //Create
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:dried_kelp", "tfc:food/dried_kelp")
  event.replaceOutput({ id: "minecraft:dried_kelp" }, "minecraft:dried_kelp", "tfc:food/dried_kelp")
  event.replaceInput({ mod: "create" }, "#minecraft:planks", "#forge:treated_wood")
  event.replaceInput({ mod: "create" }, "#forge:plates/iron", "#forge:plates/wrought_iron")
  event.forEachRecipe({ id: "woodencog:crafting/kinetics/fluid_tank" }, (r) => {
    event.recipes.kubejs
      .shaped("create:fluid_tank", r.json.asMap().pattern, r.json.asMap().key)
      .replaceIngredient("#tfc:barrels", Item.empty)
      .id(r.getId())
  })
  event.forEachRecipe({ id: "woodencog:crafting/sequenced_assembly/track" }, (r) => {
    let modifiedResult = unwrapValue(r.get("results"))[0].get("item")
    modifiedResult = Item.of(modifiedResult, 6)
    r.results(modifiedResult)
  })
  event.replaceInput(
    { id: "woodencog:crushing/milling_raw_quartzite" },
    "tfc:rock/cobble/quartzite",
    "tfc:rock/raw/quartzite"
  )

  //Functional Storage
  event.replaceInput(
    { id: "functionalstorage:framed_storage_controller" },
    "minecraft:iron_nugget",
    "#forge:plates/brass"
  )
  event.replaceInput(
    { id: "functionalstorage:framed_controller_extension" },
    "minecraft:iron_nugget",
    "#forge:plates/brass"
  )
  //Railcraft
  event.replaceInput({ id: "railcraft:water_tank_siding" }, "minecraft:slimeball", "gtceu:sticky_resin")
  event.replaceInput({ id: "railcraft:steam_locomotive" }, "railcraft:blast_furnace_bricks", "gtceu:firebricks")

  //TFC
  tfcMetallics.forEach((metal) => {
    event.replaceInput({ type: "minecraft:crafting_shaped" }, `tfc:metal/sheet/${metal}`, `#forge:plates/${metal}`)
    event.replaceInput(
      { type: "minecraft:crafting_shaped" },
      `tfc:metal/double_sheet/${metal}`,
      `#forge:plates/double/${metal}`
    )
  })

  event.replaceInput({ input: "minecraft:melon_slice" }, "minecraft:melon_slice", "tfc:food/melon_slice")
  event.replaceOutput({ output: "minecraft:melon_seeds" }, "minecraft:melon_seeds", "tfc:seeds/melon")

  //I didnt found a better way (:
  replaceHatingRecipeAluminum("tfc_ie_addon:heating/ore/poor_bauxite",'tfc_ie_addon:ore/poor_bauxite',24)
  replaceHatingRecipeAluminum("tfc_ie_addon:heating/ore/normal_bauxite",'tfc_ie_addon:ore/normal_bauxite',36)
  replaceHatingRecipeAluminum("tfc_ie_addon:heating/ore/rich_bauxite",'tfc_ie_addon:ore/rich_bauxite',48)
  replaceHatingRecipeAluminum("tfc_ie_addon:heating/ore/small_bauxite",'tfc_ie_addon:ore/small_bauxite',16)
  replaceHatingRecipeAluminum("tfc_ie_addon:heating/metal/aluminum_block",'tfc_ie_addon:metal/block/aluminum',72)
  replaceHatingRecipeAluminum("tfc_ie_addon:heating/metal/aluminum_block_stairs",'tfc_ie_addon:metal/block/aluminum_stairs',54)
  replaceHatingRecipeAluminum("tfc_ie_addon:heating/metal/aluminum_block_slab",'tfc_ie_addon:metal/block/aluminum_slab',36)
  replaceHatingRecipeAluminum("tfc_ie_addon:heating/metal/aluminum_sheet",'tfc_ie_addon:metal/sheet/aluminum',144)
  function replaceHatingRecipeAluminum(recipeId,meltingItem,amount){
    event.remove({id: recipeId})
    event.custom({
      type: "tfc:heating",
      ingredient: {
        item: meltingItem
      },
      result_fluid: {
        fluid: "gtceu:aluminium",
        amount: amount
      },
      temperature: 650
    }).id("gravitas"+recipeId.substring(12))
  }

  //Railways (Steam n Rails)
  event.forEachRecipe({ mod: "railways", id: /^railways:sequenced_assembly\/track_tfc_[^_]+$/ }, (r) => {
    let modifiedResult = unwrapValue(r.get("results"))[0].get("item")
    modifiedResult = Item.of(modifiedResult, 6)
    r.results(modifiedResult)
  })
  event.forEachRecipe({ mod: "railways", id: /^railways:sequenced_assembly\/track_tfc_.*_narrow$/ }, (r) => {
    let modifiedResult = unwrapValue(r.get("results"))[0].get("item")
    modifiedResult = Item.of(modifiedResult, 3)
    r.results(modifiedResult)
  })

  //Firmalife
  event.replaceInput({ mod: "firmalife" }, "firmalife:metal/ingot/chromium", "#forge:ingots/chromium")
  event.replaceInput({ mod: "firmalife" }, "firmalife:metal/ingot/stainless_steel", "#forge:ingots/stainless_steel")

  event.replaceInput({ mod: "firmalife", id: /^firmalife:crafting\/greenhouse\/stainless_steel*/}, "firmalife:metal/rod/stainless_steel", "#forge:rods/aluminium")

  //Firebricks/Cokebricks etc
  event.replaceInput({ id: "gtceu:shaped/compressed_coke_clay" }, "minecraft:clay_ball", "tfc:fire_clay")
  event.replaceOutput({ id: "tfc:crafting/fire_bricks" }, "tfc:fire_bricks", "gtceu:firebricks")
  event.replaceInput({ id: "firmalife:crafting/vat" }, "firmalife:metal/sheet/stainless_steel", "gtceu:bronze_plate")
  event.replaceInput(
    { id: "firmalife:crafting/jarring_station" },
    "firmalife:metal/sheet/stainless_steel",
    "gtceu:bronze_plate"
  )

  //IE
  event.replaceInput({ mod: "immersiveengineering" }, "immersiveengineering:hemp_fiber", "tfc:jute_fiber")

  //Misc
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:gold_block", "#forge:double_plates/gold")
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:amethyst", "tfc:gem/amethyst")
  event.replaceInput({ type: "minecraft:crafting_shapeless" }, "minecraft:amethyst", "tfc:gem/amethyst")
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:amethyst_shard", "tfc:gem/amethyst")

  //TFShips
  tfcShipTypes.forEach((wood) => {
    event.replaceInput({ id: `tfships:${wood}_cog` }, `tfc:wood/boat/${wood}`, `gregitas:${wood}_hull_segment`)
    event.replaceInput({ id: `tfships:${wood}_brigg` }, `tfc:wood/boat/${wood}`, `gregitas:${wood}_hull_segment`)
    event.replaceInput({ id: `tfships:${wood}_galley` }, `tfc:wood/boat/${wood}`, `gregitas:${wood}_hull_segment`)
  })
  event.replaceInput({ id: "smallships:sail" }, "#minecraft:wool", "immersiveengineering:hemp_fabric")

  //Storage Drawers
  event.replaceInput({ id: "storagedrawers:controller" }, "minecraft:stone", "#forge:stone")
  event.replaceInput({ id: "storagedrawers:controller" }, "minecraft:diamond", "create:pulse_repeater")
  event.replaceInput({ id: "storagedrawers:controller_slave" }, "minecraft:stone", "#forge:stone")
  event.replaceInput({ id: "storagedrawers:controller_slave" }, "minecraft:gold_ingot", "minecraft:repeater")
  event.replaceInput({ id: "storagedrawers:compacting_drawers_2" }, "minecraft:stone", "#forge:stone")
  event.replaceInput({ id: "storagedrawers:compacting_drawers_3" }, "minecraft:stone", "#forge:stone")
  event.replaceInput(
    { id: "storagedrawers:compacting_drawers_2" },
    "#storagedrawers:full_drawers",
    "#storagedrawers:drawers"
  )
  event.replaceInput(
    { id: "storagedrawers:compacting_drawers_3" },
    "#storagedrawers:full_drawers",
    "#storagedrawers:drawers"
  )

  event.replaceInput({}, "minecraft:compass", "firmaciv:firmaciv_compass")
  event.replaceOutput({}, "minecraft:compass", "firmaciv:firmaciv_compass")
  event.replaceInput({}, "minecraft:stone_button", "#minecraft:stone_buttons")
  event.replaceInput({ mod: "iceandfire" }, "minecraft:stone_bricks", "#forge:stone_bricks")

  event.replaceInput({ id: "iceandfire:dragon_meal" }, "#iceandfire:dragon_food_meat", "#tfc:foods/meats")
  event.replaceInput(
    { id: "woodencog:crafting/schematics/schematicannon" },
    "minecraft:smooth_stone",
    "#tfc:rock/smooth"
  )
  event.replaceInput({ id: "create:haunting/poisonous_potato" }, "minecraft:potato", "tfc:food/potato")
  event.replaceOutput(
    { id: `/^gtceu:smelting\/smelt_.*_ore_to_ingot/` },
    "minecraft:iron_ingot",
    "tfc:metal/ingot/cast_iron"
  )
  event.replaceOutput(
    { id: `/^gtceu:blasting\/smelt_.*_ore_to_ingot/` },
    "minecraft:iron_ingot",
    "tfc:metal/ingot/cast_iron"
  )
  event.replaceOutput({ id: `/^minecraft:iron_ingot_from_.*/` }, "minecraft:iron_ingot", "tfc:metal/ingot/cast_iron")
  event.replaceInput({ mod: "computercraft" }, "minecraft:redstone", "#gtceu:circuits/lv")

  event.replaceInput({ mod: "immersiveengineering" }, "#forge:rods/aluminum", "gtceu:aluminium_rod")

  //createdeco

  event.replaceInput({ mod: "createdeco" }, "minecraft:copper_ingot", "#forge:ingots/copper")
  event.replaceInput({ mod: "createdeco" }, "create:brass_ingot", "#forge:ingots/brass")
  event.replaceInput({ mod: "createdeco" }, "create:zinc_ingot", "#forge:ingots/zinc")
  event.replaceInput({ mod: "createdeco" }, "create:brass_sheet", "#forge:plates/brass")
  event.replaceInput({ mod: "createdeco" }, "create:iron_sheet", "#forge:plates/iron")
  event.replaceInput({ mod: "createdeco" }, "createdeco:zinc_sheet", "#forge:plates/zinc")
  event.replaceInput({ mod: "createdeco" }, "create:copper_sheet", "#forge:plates/copper")

  event.replaceInput({ mod: "createdeco" }, "tfc:torch", "minecraft:ochre_froglight")
  event.replaceInput({ mod: "createdeco" }, "minecraft:redstone_torch", "minecraft:glowstone")
  event.replaceInput({ mod: "createdeco" }, "minecraft:glow_berries", "minecraft:verdant_froglight")
  event.replaceInput({ mod: "createdeco" }, "minecraft:soul_torch", "minecraft:pearlescent_froglight")

  event.replaceInput({ mod: "createdeco" }, "create:brass_nugget", "#forge:nuggets/brass")
  event.replaceInput({ mod: "createdeco" }, "create:zinc_nugget", "#forge:nuggets/zinc")
  event.replaceInput({ mod: "createdeco" }, "create:copper_nugget", "#forge:nuggets/copper")
  event.replaceInput({ mod: "createdeco" }, "create:limestone", "tfc:rock/raw/limestone")
  event.replaceInput({ mod: "createdeco" }, "create:crimsite", "minecraft:netherrack")
  event.replaceInput({ mod: "createdeco" }, "create:asurine", "tfc:rock/raw/dolomite")
  event.replaceInput({ mod: "createdeco" }, "create:veridium", "tfc:rock/raw/schist")
  event.replaceInput({ mod: "createdeco" }, "create:ochrum", "tfc:rock/raw/claystone")
  event.replaceInput({ mod: "createdeco" }, "create:brass_block", "#forge:storage_blocks/brass")
  event.replaceInput({ mod: "createdeco" }, "create:zinc_block", "#forge:storage_blocks/zinc")

  //honey

  event.replaceInput({}, "minecraft:honeycomb", "firmalife:beeswax")
  event.replaceInput({}, "minecraft:honey_bottle", "firmalife:jar/honey")
  event.replaceOutput({ id: "create:emptying/honey_bottle" }, "minecraft:glass_bottle", "tfc:empty_jar")
  event.replaceInput({ id: "create:filling/honey_bottle" }, "minecraft:glass_bottle", "tfc:empty_jar")
  event.replaceOutput({ id: "create:filling/honey_bottle" }, "minecraft:honey_bottle", "firmalife:jar/honey")

  //integrated dynamics

  event.replaceInput(
    { id: "integratedtunnels:crafting/part_exporter_world_block" },
    "minecraft:diamond_pickaxe",
    "tfc:metal/pickaxe/black_steel"
  )
  event.replaceInput(
    { id: "integratedtunnels:crafting/part_importer_world_block" },
    "minecraft:diamond_pickaxe",
    "tfc:metal/pickaxe/black_steel"
  )

  //mining gadgets

  event.replaceInput(
    { id: "mininggadgets:upgrade_size_1" },
    "minecraft:diamond_pickaxe",
    "tfc:metal/pickaxe/black_steel"
  )
  event.replaceInput({ id: "mininggadgets:upgrade_size_1" }, "minecraft:ender_pearl", "#gtceu:circuits/lv")
  event.replaceInput(
    { id: "mininggadgets:upgrade_size_2" },
    "minecraft:netherite_pickaxe",
    "tfc:metal/pickaxe/blue_steel"
  )
  event.replaceInput({ id: "mininggadgets:upgrade_size_2" }, "minecraft:ender_pearl", "#gtceu:circuits/mv")
  event.replaceInput(
    { id: "mininggadgets:upgrade_size_3" },
    "minecraft:netherite_pickaxe",
    "tfc:metal/pickaxe/red_steel"
  )
  event.replaceInput({ id: "mininggadgets:upgrade_size_3" }, "minecraft:ender_pearl", "#gtceu:circuits/hv")

  //railcraft

  event.replaceInput({ id: "railcraft:track_relayer" }, "minecraft:diamond_pickaxe", "tfc:metal/pickaxe/black_steel")

  //expatternprovider

  event.replaceInput({ id: "expatternprovider:water_cell" }, "#forge:gems/diamond", "gtceu:infinite_water_cover")
  event.replaceInput({ id: "expatternprovider:water_cell" }, "minecraft:water_bucket", "gtceu:lv_super_tank")
  event.replaceInput({ id: "expatternprovider:water_cell" }, "ae2:cell_component_16k", "ae2:cell_component_64k")

  //create diesel

  event.replaceInput({ id: "createdieselgenerators:crafting/canister" }, "minecraft:barrel", "#tfc:barrels")
  event.replaceInput({ id: "createdieselgenerators:crafting/oil_barrel" }, "minecraft:barrel", "#tfc:barrels")

  //more red

  event.replaceInput({ mod: "morered" }, "morered:red_alloy_ingot", "gtceu:red_alloy_ingot")

  //simple planes

  event.replaceInput({ id: "simpleplanes:seats" }, "minecraft:phantom_membrane", "#create:seats")

  //gcyr

  event.replaceInput({ id: "gcyr:shaped/space_chest" }, "gtceu:tungstensteel_fluid_cell", "gtceu:titanium_fluid_cell")

  //SCGuns
  event.replaceInput({ mod: "scguns" }, "minecraft:stone", "#tfc:rock/smooth")
  event.replaceInput({ mod: "scguns" }, "minecraft:dandelion", "tfc:plant/dandelion")

  // treated wood

  event.replaceInput({ input: "firmalife:treated_wood" }, "firmalife:treated_wood", "#forge:treated_wood")
  event.replaceInput({ input: "gtceu:treated_wood_planks" }, "gtceu:treated_wood_planks", "#forge:treated_wood")
  event.replaceInput(
    { input: "immersiveengineering:treated_wood_packaged" },
    "immersiveengineering:treated_wood_packaged",
    "#forge:treated_wood"
  )
  event.replaceInput(
    { input: "immersiveengineering:treated_wood_vertical" },
    "immersiveengineering:treated_wood_vertical",
    "#forge:treated_wood"
  )
  event.replaceInput(
    { input: "immersiveengineering:treated_wood_horizontal" },
    "immersiveengineering:treated_wood_horizontal",
    "#forge:treated_wood"
  )

  //netherrack/cinder flour
  event.replaceInput({ input: "minecraft:netherrack" }, "minecraft:netherrack", "#forge:netherrack")
  event.replaceInput({ input: "create:cinder_flour" }, "create:cinder_flour", "#forge:dusts/netherrack")

  //apples
  event.replaceInput({ input: "minecraft:apple" }, "minecraft:apple", "#gregitas_core:apple")

  //gtceu
  event.replaceInput({ mod: "gtceu" }, "minecraft:chest", "#forge:chests/wooden") //fix ULV buses requiring vanilla chest
  event.replaceInput({ mod: "gtceu" , not: { output: 'minecraft:magma_cream' }}, "minecraft:slime_ball", "tfc:glue")
  event.replaceInput({ input: "minecraft:phantom_membrane" }, "minecraft:phantom_membrane", "#gravitas:phantom")

  //tfcea
  event.replaceInput({ mod: "tfcea" }, "tfc:metal/double_sheet/red_steel", "tfc:metal/double_ingot/red_steel")
  event.replaceInput({ mod: "tfcea" }, "tfc:metal/double_sheet/blue_steel", "tfc:metal/double_ingot/blue_steel")
}
