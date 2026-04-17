(() => {
    // Sin aplicar principio de responsabilidad única
    type Gender = 'M' | 'F'

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    interface UserProps {
        email: string;
        lastAccess?: Date;
        personProps: PersonProps;
        role: string;
    }

    interface UserSettingsProps {
        lastOpenFolder: string;
        userProps: UserProps;
        workingDirectory: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({name, gender, birthdate}: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;

        }
    }

    class User extends Person {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({email, lastAccess, role, personProps}: UserProps) {
            super(personProps);
            this.email = email;
            this.lastAccess = lastAccess ?? new Date();
            this.role = role;
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({lastOpenFolder, userProps, workingDirectory}: UserSettingsProps) {
            super(userProps);
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    const userSettings = new UserSettings({
            lastOpenFolder: '/home',
            userProps: {
                email: 'jonathanleonardonb@gmail.com',
                personProps: {
                    name: 'Jonathan',
                    gender: 'M',
                    birthdate: new Date('1997-05-30')
                },
                role: 'Admin',
            },
            workingDirectory: '/usr/home',
        }
    )

    console.log({userSettings});
})();
