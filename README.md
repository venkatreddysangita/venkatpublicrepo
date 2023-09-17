# TFL Code Challenge README

### Below are the Pre-Deployment steps before importing the solution
The below business units need to be setup in the target instance
![Business Units](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/e14bbceb-747f-475d-9489-fa8bb71225af)




### Below are the Post-Deployment steps after importing the solution
Create Teams CS Agent Team, CS Manager Team. All users to the team for the testing purpose. These are to be used in setting up the column security profiles in the admin center

![TeamCreation](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/15a3f479-5c7a-49c6-b650-7dd61d1778c6)

![ColumnSecurityProfileSample](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/62d3a3d4-1d69-4e67-8230-67734967bea1)


- Need to setup the Sharepoint integration and make sure it is enabled for Contact, Case, and the Followup Entities

- Access Team template creation for followup entity
  ![AccessTeamTemplateCreation](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/1982a434-c6bc-4017-9c55-1d7dfe9166b6)

- Access Team template need to be configured at the followup entity form and publish

![AccessTeamSetuponForm](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/03ca65b5-cd14-42f8-946a-5d8203c720b2)

### Assumptions and Key Points
- OOB features are untouched like forms, views, sitemap etc. so that customization is done for the requirements only
- The Solution needs to be tested by assigning the different security roles to users
- Users should be have the 'Basic User', 'Customer Service app access' security roles in addition to the custom security roles for testing
- Customisation of the 'Resolve' button is done only at the form level and not the home page of Case Entity
- I am unable to setup the Sharepoint site on the trial, always comes back with invalid url.
- Sharepoint permission can be managed on the security role level and hence satisfy the requirement of followup entity having the documents access

Let me know if you want to test in the trial instance that i have created, i can add a new user account for you !
Have to provide a quick demo in the trial instance !
