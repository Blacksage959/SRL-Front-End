const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
    {
     path: '/',
     name: 'home',
     getComponent(nextState, comMod) {
       import('containers/Home')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
     },





                {
                 path: '/admindash',
                 name: 'admindash',
                 getComponent(nextState, comMod) {
                   import('containers/AdminDash')
                     .then(loadModule(comMod))
                     .catch(errorLoading);
                 },
               },





   {
    path: '/users',
    name: 'users',
    getComponent(nextState, comMod) {
      import('containers/Users')
        .then(loadModule(comMod))
        .catch(errorLoading);
    },
   },
   {
    path: '/fuser',
    name: 'finduser',
    getComponent(nextState, comMod) {
      import('containers/FUser')
        .then(loadModule(comMod))
        .catch(errorLoading);
    },
   },
   {
    path: '/suser/:id',
    name: 'suser',
    getComponent(nextState, comMod) {
      import('containers/SUser')
        .then(loadModule(comMod))
        .catch(errorLoading);
    },
   },





               {
                path: '/orders',
                name: 'orders',
                getComponent(nextState, comMod) {
                  import('containers/Orders')
                    .then(loadModule(comMod))
                    .catch(errorLoading);
                },
              },
              {
               path: '/forder',
               name: 'findorder',
               getComponent(nextState, comMod) {
                 import('containers/FOrder')
                   .then(loadModule(comMod))
                   .catch(errorLoading);
               },
              },
              {
               path: '/sorder/:id',
               name: 'sorder',
               getComponent(nextState, comMod) {
                 import('containers/SOrder')
                   .then(loadModule(comMod))
                   .catch(errorLoading);
               },
              },




  {
   path: '/products',
   name: 'products',
   getComponent(nextState, comMod) {
     import('containers/Products')
       .then(loadModule(comMod))
       .catch(errorLoading);
   },
 },
 {
  path: '/allproducts',
  name: 'allproducts',
  getComponent(nextState, comMod) {
    import('containers/AllProducts')
      .then(loadModule(comMod))
      .catch(errorLoading);
  },
 },
  {
  path: '/fprod',
  name: 'findprod',
  getComponent(nextState, comMod) {
    import('containers/FProd')
      .then(loadModule(comMod))
      .catch(errorLoading);
  },
 },
 {
  path: '/nprod',
  name: 'newprod',
  getComponent(nextState, comMod) {
    import('containers/NProd')
      .then(loadModule(comMod))
      .catch(errorLoading);
  },
 },
 {
  path: '/sprod/:id',
  name: 'sprod',
  getComponent(nextState, comMod) {
    import('containers/SProd')
      .then(loadModule(comMod))
      .catch(errorLoading);
  },
 },
 {
  path: '/upprod/:id',
  name: 'upprod',
  getComponent(nextState, comMod) {
    import('containers/UpProd')
      .then(loadModule(comMod))
      .catch(errorLoading);
  },
 },



               {
                path: '/roles',
                name: 'roles',
                getComponent(nextState, comMod) {
                  import('containers/Roles')
                    .then(loadModule(comMod))
                    .catch(errorLoading);
                },
              },
              {
               path: '/nrole',
               name: 'newrole',
               getComponent(nextState, comMod) {
                 import('containers/NRole')
                   .then(loadModule(comMod))
                   .catch(errorLoading);
               },
              },
              {
               path: '/frole',
               name: 'findrole',
               getComponent(nextState, comMod) {
                 import('containers/FRole')
                   .then(loadModule(comMod))
                   .catch(errorLoading);
               },
              },
              {
               path: '/srole/:id',
               name: 'srole',
               getComponent(nextState, comMod) {
                 import('containers/SRole')
                   .then(loadModule(comMod))
                   .catch(errorLoading);
               },
              },
              {
               path: '/uprole/:id',
               name: 'uprole',
               getComponent(nextState, comMod) {
                 import('containers/UpRole')
                   .then(loadModule(comMod))
                   .catch(errorLoading);
               },
              },




{
 path: '/categories',
 name: 'categories',
 getComponent(nextState, comMod) {
   import('containers/Categories')
     .then(loadModule(comMod))
     .catch(errorLoading);
 },
},
{
 path: '/ncat',
 name: 'newcategory',
 getComponent(nextState, comMod) {
   import('containers/NCat')
     .then(loadModule(comMod))
     .catch(errorLoading);
 },
},
{
 path: '/fcat',
 name: 'findcategory',
 getComponent(nextState, comMod) {
   import('containers/FCat')
     .then(loadModule(comMod))
     .catch(errorLoading);
 },
},

{
 path: '/scat/:id',
 name: 'scat',
 getComponent(nextState, comMod) {
   import('containers/SCat')
     .then(loadModule(comMod))
     .catch(errorLoading);
 },
},
{
 path: '/upcat/:id',
 name: 'upcat',
 getComponent(nextState, comMod) {
   import('containers/UpCat')
     .then(loadModule(comMod))
     .catch(errorLoading);
 },
},
{
 path: '/showcat/:id',
 name: 'showcat',
 getComponent(nextState, comMod) {
   import('containers/ShowCat')
     .then(loadModule(comMod))
     .catch(errorLoading);
 },
},


                  {
                   path: '/signin',
                   name: 'signin',
                   getComponent(nextState, comMod) {
                     import('containers/SignIn')
                       .then(loadModule(comMod))
                       .catch(errorLoading);
                   },
                  },
                  {
                   path: '/signup',
                   name: 'signup',
                   getComponent(nextState, comMod) {
                     import('containers/SignUp')
                       .then(loadModule(comMod))
                       .catch(errorLoading);
                   },
                  },



{
 path: '/shoppingcart',
 name: 'shoppingcart',
 getComponent(nextState, comMod) {
   import('containers/ShoppingCart')
     .then(loadModule(comMod))
     .catch(errorLoading);
 },
},


{
 path: '/aboutsrl',
 name: 'aboutsrl',
 getComponent(nextState, comMod) {
   import('containers/AboutSrl')
     .then(loadModule(comMod))
     .catch(errorLoading);
 },
},


{
 path: '/education',
 name: 'education',
 getComponent(nextState, comMod) {
   import('containers/Education')
     .then(loadModule(comMod))
     .catch(errorLoading);
 },
},
{
 path: '/myprofile',
 name: 'myprofile',
 getComponent(nextState, comMod) {
   import('containers/MyProfile')
     .then(loadModule(comMod))
     .catch(errorLoading);
 },
},
{
 path: '/contact',
 name: 'contact',
 getComponent(nextState, comMod) {
   import('containers/Contact')
     .then(loadModule(comMod))
     .catch(errorLoading);
 },
},


                  {
                   path: '*',
                   name: 'notfound',
                   getComponent(nextState, comMod) {
                     import('containers/NotFoundPage')
                       .then(loadModule(comMod))
                       .catch(errorLoading);
                   },
                 },

            ];
          }
