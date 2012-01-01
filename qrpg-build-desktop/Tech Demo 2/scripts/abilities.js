{
  var ability;

  ability = newAbility('CurePotion');
  ability.targetSelf = true;
  ability.targetEnemies = true;
  ability.targetFriends = true;
  ability.targetMultiple = false;
  ability.useInBattle = true;
  ability.useOutsideBattle = true;
  ability.portrait = "../Tech Demo 2/images/icons/P_Red01.png";

  ability.activate = function(caster, targets) {
    console.log(caster.name + " uses " + this.name + " on " + targets[0].name);
    target = targets[0];
    target.addHp(30);
    //rpgx.dumpScriptObject(this);
    sfx.jingle1.play();
    this.deleteObject();
    console.log("CurePotion done");
  }

  //rpgx.dumpScriptObject(activate);
  //ability.setActivateFunction(activate);

  allAbilities['CurePotion'] = ability;
  console.log("Created ability " + ability.name);

  ability = newAbility('GreenTea');
  ability.targetSelf = true;
  ability.targetEnemies = true;
  ability.targetFriends = true;
  ability.targetMultiple = false;
  ability.useInBattle = true;
  ability.useOutsideBattle = true;
  ability.portrait = "../Tech Demo 2/images/icons/P_Green01.png";

  ability.activate = function(caster, targets) {
    console.log(caster.name + " uses " + this.name + " on " + targets[0].name);
    target = targets[0];
    target.addMp(30);
    sfx.jingle1.play();
    //rpgx.dumpScriptObject(this);
    this.deleteObject();
    console.log("GreenTea done");
  }

  //rpgx.dumpScriptObject(activate);
  //ability.setActivateFunction(activate);

  allAbilities['GreenTea'] = ability;
  console.log("Created ability " + ability.name);


  ability = newAbility('BarehandedFight');
  ability.targetSelf = true;
  ability.targetEnemies = true;
  ability.targetFriends = true;
  ability.targetMultiple = false;
  ability.useInBattle = true;
  ability.useOutsideBattle = false;
  ability.menuPath = new Array('Fight');
  ability.portrait = "../Tech Demo 2/images/icons/W_Fist001.png";

  ability.activate = function(caster, targets) {
    console.log(caster.name + " attacks " + targets[0].name);
    target = targets[0];
    damage = caster.atk - target.def;
    if(damage < 1) damage = 1;
    target.addHp(-damage);
    console.log(target.name + " takes " + damage + " damage");
  }


  allAbilities['BarehandedFight'] = ability;

  ability = newAbility('Fire1');
  ability.targetSelf = true;
  ability.targetEnemies = true;
  ability.targetFriends = true;
  ability.targetMultiple = false;
  ability.useInBattle = true;
  ability.useOutsideBattle = false;
  ability.menuPath = new Array('Magic', 'Fire1');
  ability.portrait = "../Tech Demo 2/images/icons/S_Fire01.png";
  ability.mpCost = 5;

  ability.activate = function(caster, targets) {
    console.log(caster.name + " casts Fire1 on " + targets[0].name);
    target = targets[0];
    damage = caster.matk;
    if(damage < 1) damage = 1;
    target.addHp(-damage);
    caster.addMp(-(this.mpCost));
    console.log(target.name + " takes " + damage + " damage");
  }

  allAbilities['Fire1'] = ability;

  ability = newAbility('Cure1');

  ability.targetSelf = true;
  ability.targetEnemies = true;
  ability.targetFriends = true;
  ability.targetMultiple = true;
  ability.useInBattle = true;
  ability.useOutsideBattle = true;
  ability.menuPath = new Array('Magic', 'Cure');
  ability.portrait = "../Tech Demo 2/images/icons/S_Holy01.png";
  ability.mpCost = 4;

  ability.activate = function(caster, targets) {
    console.log(caster.name + " casts " + this.name + " on " + targets[0].name);
    target = targets[0];
    target.addHp(15 + Math.floor(caster.matk / 8));
    caster.addMp(-(this.mpCost));
    sfx.cure1.play();
    //rpgx.dumpScriptObject(this);
    console.log("Cure1 done");
  }

  //rpgx.dumpScriptObject(activate);
  //ability.setActivateFunction(activate);

  allAbilities['Cure1'] = ability;
  console.log(serialize(allAbilities['Cure1']));
  console.log("Created ability " + ability.name);

  ability = newAbility('Run');

  ability.targetSelf = false;
  ability.targetEnemies = false;
  ability.targetFriends = false;
  ability.targetMultiple = false;
  ability.useInBattle = true;
  ability.useOutsideBattle = true;
  ability.menuPath = new Array('Run');

  ability.activate = function(caster, targets) {

  }

  //rpgx.dumpScriptObject(activate);
  //ability.setActivateFunction(activate);

  allAbilities['Run'] = ability;
  console.log(serialize(allAbilities['Run']));
  console.log("Created ability " + ability.name);
}
