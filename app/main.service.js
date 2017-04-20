(function () {
  'use strict';

  angular
    .module('sewa.toolkit.service', ['sewa.toolkit.constants'])
    .service('ToolkitService', ToolkitService);

  ToolkitService.$inject = ['TOOLKIT_CONSTANTS', '_'];

  /*
  'full_unit' : {
    'template' : 'infantry',
    'race' : 'high_men',
    'figures' : 6,
    'cost' : 20,
    'upkeep' : 1,
    'experience' : 50,
    'stats' : {
      'str' : 5,
      'end' : 5,
      'wis' : 5,
      'agi' : 5
    },
    'hp_hearts' : 1,
    'hp_max' : 5,
    'hp_current' : 5,
    'melee_damage' : 5,
    'melee_attacks' : 3,
    'to_hit' : 0.3,
    'defence' : 2,
    'resistance' : 4,
    'movement' : 1,
    'movement_type' : 'land',
    'initiative' : 5,
    'encumbrance' : 100,
    'traits' : {
      'large_shield' : 1,
    }
  },
  'swordmen' : {
    'template' : 'infantry',
    'race' : 'high_men',
    'name' : 'High Men Swordman',
    'experience' : 50,
    'equipment' : {
      'weapon1' : 'common_sword',
      'weapon2' : 'large_shield',
      'armour' : 'light',
      'mount' : 'none',
    },
    'traits' : {
      'large_shield' : 1,
    }
  },
  */
  function ToolkitService(TOOLKIT_CONSTANTS, _) {
    return {
      generateUnitDefinition: function(setup) {
        var unit = angular.copy(setup);
        var template = TOOLKIT_CONSTANTS.templates[setup.template];
        
        unit.figures = template.figures;
        unit.upkeep = template.upkeep;
        unit.stats = TOOLKIT_CONSTANTS.races[setup.race];
        
        unit.hp_hearts = template.hp_hearts;
        unit.hp_max = unit.hp_hearts * unit.stats.end;
        unit.hp_current = unit.hp_max;
        
        // TODO: fix formulas
        unit.melee_damage = Math.floor(unit.stats.str / 3);
        unit.melee_attacks = Math.floor(unit.stats.agi / 5);
        unit.defence = Math.floor(unit.stats.end / 10);
        
        unit.to_hit = unit.stats.agi * 5 + 5;
        unit.resistance = unit.stats.wis;
        
        unit.encumbrance = unit.stats.end * 10 + unit.stats.str * 5 + 25;
        
        unit.movement = template.movement;
        unit.movement_type = template.movement_type;        
        unit.initiative = 5; // TODO
        
        unit.cost = template.cost;
        unit.weight = 0;
        
        unit.traits = [];        
        if (template.traits) {
          unit.traits = _.union(unit.traits, template.traits);
        }
        
        // Check equipment and adjust stats
        _.each(unit.equipment, function(val, key) {
          var equip = TOOLKIT_CONSTANTS.equipment[key][val];
          if (equip) {
            unit.cost += equip.cost;
            unit.weight += equip.weight;
            if (equip.traits) {
              unit.traits = _.union(unit.traits, equip.traits);
            }
            
            // TODO: check if every slot/stats is appropriate (multiple weapons, etc)
            // Should we replace base melee stats instead of adding??
            if (equip.melee_damage) {
              unit.melee_damage += equip.melee_damage;
            }
            if (equip.melee_attacks) {
              unit.melee_attacks += equip.melee_attacks;
            }
            // TODO: replace individual bonuses with 'bonus' object and _.each
            if (equip.bonus_defence) {
              unit.defence += equip.bonus_defence;
            }
          } else {
            console.log("Equipment reference not found! " + val + " in " + key);
          }
        });
        
        return unit;
      },
      runDuel(aUnit, dUnit) {
        return 'aba';
      },
      initiateMelee: function(aUnit, dUnit, env) {
        
      },
      performSpecialAttack: function(aUnit, dUnit, env) {
        
      },
      performMeleeAttack: function(aUnit, dUnit, env) {
        
      },
      calcMaxDamage: function(aUnit, dUnit, env) {
        
      },
      getUnitDefence: function(aUnit, dUnit, env) {
        
      },
    }
  }

})();