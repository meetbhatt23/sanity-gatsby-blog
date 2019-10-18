export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da96188f8a9b491cb852287',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qbvop1qr',
                  apiId: '4e04d7b0-2ea0-4919-bc21-9453b2f3400d'
                },
                {
                  buildHookId: '5da9618888ac2cf6a58b9b32',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-52o7jzsm',
                  apiId: '56472473-13ec-4ef4-a216-f253632f88c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/meetbhatt23/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-52o7jzsm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
