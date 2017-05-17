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
   path: '/products',
   name: 'products',
   getComponent(nextState, comMod) {
     import('containers/Products')
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
