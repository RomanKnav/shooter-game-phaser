const assets = {
    images: [
        { key: 'background', path: '/lib/images/background/background-working3.png' },

        // assault pig:
        { key: 'assault-pig', path: 'lib/images/assault-pig/pig-stand-clear.png' },
        { key: 'assault-pig-fire', path: 'lib/images/assault-pig/pig-stand-fire.png' },
        { key: 'assault-pig-walk', path: 'lib/images/assault-pig/pig-walk-clear/pigFrames.png' },

        // bomber:
        { key: 'bomber', path: 'htdocs/assets/images/bomber/bomber-clear.png' },
        { key: 'bomber-fire', path: 'htdocs/assets/images/bomber/bomber-fire.png' },

        // plane:
        { key: 'plane', path: 'htdocs/assets/images/pig-plane-clear.png' },
       
        // maggot:
        { key: 'maggot', path: 'htdocs/assets/images/maggot/spritesheet/maggotsheet.png' },

        // enemy sheep:
        { key: 'girl-stand', path: 'htdocs/assets/images/enemy-sheep/girl-sheep-clear.png' },
        { key: 'girl-walk', path: 'htdocs/assets/images/enemy-sheep/girl-frames/clears/spritesheet.png' },

        // civies:
        { key: 'civy1', path: 'htdocs/assets/images/civy/civy-frame-clears/spritesheet.png' },
        { key: 'civy2', path: 'htdocs/assets/images/civy/new-frames/spritesheet2.png' },
        { key: 'dog', path: 'htdocs/assets/images/dog/dog-frames/spritesheet.png' },

        // WARREN PISTOL:
        { key: 'sheep_pistol_elevate', path: 'htdocs/assets/images/CLEARS/pistol/sheep-pistol-clear-elevate.png' },
        { key: 'sheep_pistol_crouch', path: 'htdocs/assets/images/CLEARS/pistol/sheep-pistol-crouch-clear-new.png' },
        { key: 'sheep_pistol_crouch_top', path: 'htdocs/assets/images/CLEARS/pistol/sheep-pistol-crouch-top-clear.png' },
        { key: 'sheep_pistol_lookup', path: 'htdocs/assets/images/CLEARS/pistol/sheep-pistol-lookup-clear.png' },
        { key: 'sheep_pistol_lookup_crouch', path: 'htdocs/assets/images/CLEARS/pistol/sheep-pistol-lookup-crouch-clear.png' },
        { key: 'sheep_pistol_top', path: 'htdocs/assets/images/CLEARS/pistol/sheep-pistol-top-clear.png' },

        // WARREN RIFLE:
        { key: 'sheep_rifle_up_crouch', path: 'htdocs/assets/images/CLEARS/rifle/sheep-rifle-up-crouch-clear.png' },
        { key: 'sheep_rifle_up', path: 'htdocs/assets/images/CLEARS/rifle/sheep-rifle-up-clear.png' },
        { key: 'sheep_rifle_top_crouch', path: 'htdocs/assets/images/CLEARS/rifle/sheep-rifle-top-crouch-clear.png' },
        { key: 'sheep_rifle_top', path: 'htdocs/assets/images/CLEARS/rifle/sheep-rifle-top-clear.png' },
        { key: 'sheep_rifle_crouch', path: 'htdocs/assets/images/CLEARS/rifle/sheep-rifle-crouch-clear.png' },
        { key: 'sheep_rifle', path: 'htdocs/assets/images/CLEARS/rifle/sheep-rifle-clear.png' },
        { key: 'sheep_rifle_elevate', path: 'htdocs/assets/images/CLEARS/rifle/sheep-rifle-clear-elevate.png' },

        // WARREN FLAMMEN:
        { key: 'flammen_top', path: 'htdocs/assets/images/CLEARS/flammen/flammen-top.png' },
        { key: 'flammen_stand', path: 'htdocs/assets/images/CLEARS/flammen/flammen-stand.png' },
        { key: 'flammen_stand_up', path: 'htdocs/assets/images/CLEARS/flammen/flammen-stand-up.png' },
        { key: 'flammen_crouch', path: 'htdocs/assets/images/CLEARS/flammen/flammen-crouch.png' },
        { key: 'flammen_crouch_up', path: 'htdocs/assets/images/CLEARS/flammen/flammen-crouch-up.png' },
        { key: 'flammen_crouch_top', path: 'htdocs/assets/images/CLEARS/flammen/flammen-crouch-top.png' },

        // WARREN DEAD:
        { key: 'warren_dead', path: 'htdocs/assets/images/CLEARS/dead-warren/dead-warren-clear.png' },

        // PICKUPS (ALSO ICONS):
        { key: 'wall', path: 'htdocs/assets/images/pickups/clears/wall copy.png' },
        { key: 'rifle', path: 'htdocs/assets/images/pickups/clears/rifle copy.png' },
        { key: 'grenade', path: 'htdocs/assets/images/pickups/clears/grenade copy.png' },
        { key: 'flammen', path: 'htdocs/assets/images/pickups/clears/flammen copy.png' },
        { key: 'aidConcept', path: 'htdocs/assets/images/pickups/clears/aidConcept copy.png' }
    ],
    audio: [
        { key: 'castle_crashers_theme', path: 'lib/306544_Four_Brave_Champions__FULL.mp3' },
        // Add more audio paths here
    ],
    spritesheets: [
        { key: 'player', path: 'lib/spritesheets/player.png', frameWidth: 32, frameHeight: 48 },
        // Add more spritesheet paths and frame data here
    ],
    // Add more asset types here (e.g., tilemaps, atlases, etc.)
};

export default assets;
