(() => {
    // Sin aplicar principio de responsabilidad única
    type Gender = 'M' | 'F'

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    interface UserProps {
        birthdate: Date;
        gender: Gender;
        name: string;
        email: string;
        role: string;
    }

    interface UserSettingsProps {
        birthdate: Date;
        gender: Gender;
        name: string;
        email: string;
        role: string;
        lastOpenFolder: string;
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

        constructor({email, role, name, gender, birthdate}: UserProps) {
            super({name, gender, birthdate});
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({lastOpenFolder, workingDirectory, email, role, name, gender, birthdate}: UserSettingsProps) {
            super({email, role, name, gender, birthdate});
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    const userSettings = new UserSettings({
            lastOpenFolder: '/home',
            email: 'jonathanleonardonb@gmail.com',
            name: 'Jonathan',
            gender: 'M',
            birthdate: new Date('1997-05-30'),
            role: 'Admin',
            workingDirectory: '/usr/home',
        }
    )

    console.log({userSettings});
})();
