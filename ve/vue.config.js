module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  pluginOptions : {
    electronBuilder : {
      builderOptions : {
        appId : 'com.coworker.test',
        nsis : {
          shortcutName : 'coworker Tool Win'
        },
        dmg : {
          title : "cowerker Tool Mac"
        },
        win : {
          target : [
            {
              target : "nsis",
              arch : [
                'x64'
              ]
            }
          ]
        },
        mac : {
          category : "public.app-category.developer-tools",
          target : [
            {
              target : "dmg"
            }
          ]
        }
      }
    }
  }
};
