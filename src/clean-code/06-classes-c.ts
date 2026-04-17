(() => {
        // Aplicando principio de responsabilidad única
        // Priorizar la composición frente a la herencia
        type Gender = 'M' | 'F'

        interface PersonProps {
            birthdate: Date;
            gender: Gender;
            name: string;
        }

        interface UserProps {
            email: string;
            lastAccess?: Date;
            role: string;
        }

        interface SettingsProps {
            lastOpenFolder: string;
            workingDirectory: string;
        }

        interface UserSettingsProps {
            birthdate: Date;
            gender: Gender;
            name: string;
            email: string;
            lastAccess?: Date;
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

        class User {
            public email: string;
            public lastAccess: Date;
            public role: string;

            constructor({email, lastAccess, role}: UserProps) {
                this.email = email;
                this.lastAccess = lastAccess ?? new Date();
                this.role = role;
            }

            checkCredentials(): boolean {
                return true;
            }
        }

        class Settings {
            public workingDirectory: string;
            public lastOpenFolder: string;

            constructor({lastOpenFolder, workingDirectory}: SettingsProps) {
                this.lastOpenFolder = lastOpenFolder;
                this.workingDirectory = workingDirectory;
            }
        }

        class UserSettings {
            public person: Person;
            public user: User;
            public settings: Settings;

            constructor({
                            birthdate,
                            gender,
                            name,
                            email,
                            lastAccess,
                            role,
                            lastOpenFolder,
                            workingDirectory
                        }: UserSettingsProps) {
                this.person = new Person({birthdate, gender, name})
                this.user = new User({email, lastAccess, role})
                this.settings = new Settings({lastOpenFolder, workingDirectory});
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
    }
)
();
