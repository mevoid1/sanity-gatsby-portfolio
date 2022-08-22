export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6303de6f7228b72048e23158',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-641891uy',
                  apiId: '2f1830f8-f6b8-4301-996f-df10b66f0715'
                },
                {
                  buildHookId: '6303de7061e64a26404058f8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vidcv3ku',
                  apiId: 'd2529482-e529-45a7-ac0b-9d7de0135df1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mevoid1/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vidcv3ku.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
