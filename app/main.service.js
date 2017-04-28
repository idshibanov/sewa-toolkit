(function () {
  'use strict';

  angular
    .module('sewa.toolkit.service', ['sewa.toolkit.constants'])
    .service('ToolkitService', ToolkitService);

  ToolkitService.$inject = ['TOOLKIT_CONSTANTS', '_'];

  function ToolkitService(TOOLKIT_CONSTANTS, _) {    
    return {
      generateUnitDefinition: function(setup) {
        var unit = angular.copy(setup);
        var template = TOOLKIT_CONSTANTS.templates[setup.template];
        
        if (!setup.name) {
          unit.name = TOOLKIT_CONSTANTS.races[setup.race].name + " " + template.name;
        }
        
        unit.figures = template.figures;
        unit.upkeep = template.upkeep;
        unit.stats = TOOLKIT_CONSTANTS.races[setup.race].stats;
        
        unit.hp_hearts = template.hp_hearts;
        unit.hp_max = unit.hp_hearts * unit.stats.end;
        unit.hp_current = unit.hp_max;
        
        // TODO: fix formulas
        unit.melee_damage = Math.floor(unit.stats.str / 3);
        unit.melee_attacks = Math.floor(unit.stats.agi / 5);
        unit.defence = Math.floor(unit.stats.end / 10);
        
        // TODO: hit bonus is too high
        unit.to_hit = unit.stats.agi * 5 + 5;
        unit.resistance = unit.stats.wis;
        
        // TODO: Agi/move penalty based on encumb
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
            if (equip.defence) {
              unit.defence += equip.defence;
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