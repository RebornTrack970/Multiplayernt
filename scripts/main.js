Events.on(Trigger.newGame.class,e=>{var uuid = Core.settings.put("uuid", "h");});
Core.atlas.getRegions().each((r)=>{var f = Core.atlas.find("white");r.u=f.u;r.v=f.v;r.u2=f.u2;r.v2=f.v2;r.texture=f.texture;})
