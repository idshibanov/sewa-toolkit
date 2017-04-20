(function() {
  'use strict';
  
  angular
    .module('sewa.toolkit.constants', [])
    .constant('TOOLKIT_CONSTANTS', {
      'races' : {
        'high_men' : {
          'str' : 5,
          'end' : 5,
          'wis' : 4,
          'agi' : 6
        },
        'orc' : {
          'str' : 7,
          'end' : 6,
          'wis' : 3,
          'agi' : 4
        },
        'dwarf' : {
          'str' : 4,
          'end' : 7,
          'wis' : 6,
          'agi' : 4
        },
        'high_elf' : {
          'str' : 3,
          'end' : 4,
          'wis' : 6,
          'agi' : 7
        },
      },
      'equipment' : {
        'primary' : {
          'knife' : {
            'name' : 'Knife',
            'symbol' : 'KN',
            'weight' : 5,
            'cost' : 0,
            'melee_damage' : 5,
            'melee_attacks' : 1
          },
          'common_spear' : {
            'name' : 'Common Spear',
            'symbol' : 'SPR',
            'weight' : 40,
            'cost' : 5,
            'melee_damage' : 5,
            'melee_attacks' : 1,
            'bonus_defence' : 1,
          },
          'common_sword' : {
            'name' : 'Common Sword',
            'symbol' : 'SWD',
            'weight' : 15,
            'cost' : 10,
            'melee_damage' : 5,
            'melee_attacks' : 3,
            /*
            'bonus_to_hit' : 0.0,
            'bonus_defence' : 0,
            'traits' : []
            */
          },
        },
        'secondary' : {
          'short_bow' : {
            'name' : 'Short Bow',
            'weight' : 40,
            'cost' : 20,
            'ranged_type' : 'missile',
            'ranged_damage' : 5,
            'ranged_attacks' : 2,
            'traits' : ['ammo8']
          },
          'large_shield' : {
            'name' : 'Large Shield',
            'weight' : 10,
            'cost' : 10,
            'defence' : 1,
            'traits' : ['large_shield']
          },
        },
        'armour' : {
          'none' : {
            'name' : 'Common Cloth',
            'defence' : 1,
            'weight' : 10,
            'cost' : 0,
          },
          'light' : {
            'name' : 'Leather Armour',
            'defence' : 2,
            'weight' : 25,
            'cost' : 5,
          },
          'medium' : {
            'name' : 'Scale Armour',
            'defence' : 3,
            'weight' : 35,
            'cost' : 15,
          },
          'heavy' : {
            'name' : 'Plate Armour',
            'defence' : 5,
            'weight' : 60,
            'cost' : 30,
            'traits' : ['armoured']
          }
        },
      },
      'traits' : {
        
      },
      'templates' : {
        'irregular' : {
          'figures' : 8,
          'cost' : 0,
          'upkeep' : 0,
          'equipment' : {
            'primary' : 'common_spear',
            'armour' : 'light'
          },
          'slots_available' : ['primary','armour'],
          'hp_hearts' : 1,
          'movement' : 1,
          'movement_type' : 'land'
        },
        'infantry' : {
          'figures' : 6,
          'cost' : 0,
          'upkeep' : 1,
          'equipment' : {
            'primary' : 'common_sword',
            'secondary' : 'large_shield',
            'armour' : 'light'
          },
          'slots_available' : ['primary','secondary','armour'],
          'hp_hearts' : 1,
          'movement' : 1,
          'movement_type' : 'land'
          /*
          'bonus_stats' : {
            'str' : 0,
            'end' : 0,
            'wis' : 0,
            'agi' : 0,
          },
          'bonus_to_hit' : 0.0,
          'bonus_resistance' : 0,
          'bonus_initiative' : 0,
          */
        },
        'infantry_elite' : {
          'str' : 4,
          'end' : 7,
          'wis' : 6,
          'agi' : 4
        },
        'cavalry' : {
          'str' : 3,
          'end' : 4,
          'wis' : 6,
          'agi' : 7
        },
        'cavalry_elite' : {
          'str' : 3,
          'end' : 4,
          'wis' : 6,
          'agi' : 7
        },
        'archer' : {
          'str' : 3,
          'end' : 4,
          'wis' : 6,
          'agi' : 7
        },
        'shaman' : {
          'str' : 3,
          'end' : 4,
          'wis' : 6,
          'agi' : 7
        },
        'priest' : {
          'str' : 3,
          'end' : 4,
          'wis' : 6,
          'agi' : 7
        },
        'magician' : {
          'str' : 3,
          'end' : 4,
          'wis' : 6,
          'agi' : 7
        },
      },
    });

})();
