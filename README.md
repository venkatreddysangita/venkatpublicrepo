# TFL Code Challenge README

### Below are the Pre-Deployment steps before importing the solution
The below business units need to be setup in the target instance
![Business Units](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/e14bbceb-747f-475d-9489-fa8bb71225af)

The Business Unit Hierarchy ensures the users work on the records in their contact centre areas


### Deployment Steps

Import the managed solution 'TFLDevSprint_1_0_0_0_managed.zip' into the managed environment. Import unmanaged solution 'TFLDevSprint_1_0_0_0.zip' only for Dev environments

Solution Componenets preview is below,

![SolutionComponentsPreview](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/d9195482-8648-47a0-a7a9-ccd195e150fb)


### Below are the Post-Deployment steps after importing the solution
Create Teams CS Agent Team, CS Manager Team. Add users to the team as needed for the testing purpose. These teams will be used in setting up the column security profiles in the admin center

![TeamCreation](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/15a3f479-5c7a-49c6-b650-7dd61d1778c6)

![ColumnSecurityProfileSample](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/62d3a3d4-1d69-4e67-8230-67734967bea1)


- Need to setup the Sharepoint integration and make sure it is enabled for Contact, Case, and the Followup Entities. Trial instance did not allow me to create a sharepoint site in the environment. If the target instance has a sharepoint site, that can be used. The necessary security permissions for sharepoint site and document location are configured in the security roles

- Access Team template to be created for followup entity
  ![AccessTeamTemplateCreation](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/1982a434-c6bc-4017-9c55-1d7dfe9166b6)

- Access Team template need to be configured for the followup entity form. Once configured, please publish the solution

![AccessTeamSetuponForm](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/03ca65b5-cd14-42f8-946a-5d8203c720b2)


- Create 2 new teams in the environment = 'Confidential Team' and 'Escalation Team'. Add team members for test purposes.
- Confidential Team should be given the 'CS Confidential Role' security role
- Escalation Team should be given the 'CS Escalation Role' security role


Followup Entity Access team template id needs to be configured on the cloud flow "Confidential Cases"



Power Automate 'Followup Email Notification' = Since the trial instance cannot make a outlook connection, this is a draft power automate flow to be configured

![EmailNotification](https://github.com/venkatreddysangita/venkatpublicrepo/assets/145289091/526e8676-91f1-4cce-ad24-65ce338c80f4)



### Assumptions and Key Points
- OOB features are untouched like forms, views, sitemap etc. so that customization is done for the requirements only
- The Solution needs to be tested by assigning the different security roles to users
- All Users should have the 'Basic User', 'Customer Service app access' security roles in addition to the custom security roles for testing purpose
- Customisation of the 'Resolve' button is done only at the form level and not the home page of Case Entity
- I am unable to setup the Sharepoint site on the trial instance, always comes back with invalid url.
- Sharepoint permission can be managed on the security role level and hence it satisfies the requirement of followup entity having the documents access
- Have used Power automate cloud flows instead of plugin for the creation of followup entity records to avoid unnecessary coding. The same scenario can be done using plugin
- During testing, please note the security roles assigned to a user directly and inherited through the team's security roles have an affect on the access. Example - USer A has CS Agent role and also part of Escalation Team

Let me know if you want to test in the trial instance that i have created, i can add a new user account for you !
