# EduManage
#include <iostream>
#include <string>

using namespace std;

struct Student {
    string name;
    int rollNumber;
    string course;
    float marks;
    string clubs[5]; 
    int numClubs;
};

struct Club {
    string name;
    string members[50]; 
    int numMembers;
};

const int MAX_STUDENTS = 100;
Student students[MAX_STUDENTS];
int numStudents = 0;

const int MAX_CLUBS = 5; 
Club clubs[MAX_CLUBS];
int numClubs = 0;

void addStudent();
void deleteStudent();
void searchStudent();
void updateStudent();
void displayAllStudents();
void sortStudentsByRollNumber();
void gradeCalculation();
void markEntry();
void studentCount();
void averageMarks();

void generateReportCard();
void topperList();
void findStudentByName();
void findStudentByCourse();
void calculatePassPercentage();
void calculateFailPercentage();
void highestMarks();
void lowestMarks();
void exitProgram();

void joinClub();
void leaveClub();
void viewClubs();
void viewMembers();
void showYourJoinedClubs(int rollNumber);
int main() {
    int userType;
    cout << "Welcome to Student Database Management System!" << endl;
    cout << "Select User Type:" << endl;
    cout << "1. Teacher" << endl;
    cout << "2. Student" << endl;
    cout << "3. Exit" << endl;
    cout << "Enter your choice: ";
    cin >> userType;

    clubs[0].name = "Anchoring Club";
    clubs[1].name = "Sports Club";
    clubs[2].name = "Coding Club";
    clubs[3].name = "Drama Club";
    clubs[4].name = "Dance Club";
    numClubs = 5;

    if (userType == 1) {
        int choice;
        while (true) {
            cout << "\nTeacher Menu:" << endl;
            cout << "1. Add Student" << endl;
            cout << "2. Delete Student" << endl;
            cout << "3. Search Student" << endl;
            cout << "4. Update Student" << endl;
            cout << "5. Display All Students" << endl;
            cout << "6. Sort Students by Roll Number" << endl;
            cout << "7. Grade Calculation" << endl;
            cout << "8. Mark Entry" << endl;
            cout << "9. Student Count" << endl;
            cout << "10. Average Marks" << endl;
            cout << "11. Go back to User Type selection" << endl;
            cout << "12. Exit" << endl;
            cout << "Enter your choice: ";
            cin >> choice;

            switch (choice) {
                case 1:
                    addStudent();
                    break;
                case 2:
                    deleteStudent();
                    break;
                case 3:
                    searchStudent();
                    break;
                case 4:
                    updateStudent();
                    break;
                case 5:
                    displayAllStudents();
                    break;
                case 6:
                    sortStudentsByRollNumber();
                    break;
                case 7:
                    gradeCalculation();
                    break;
                case 8:
                    markEntry();
                    break;
                case 9:
                    studentCount();
                    break;
                case 10:
                    averageMarks();
                    break;
                case 11:
                    main(); 
                    break;
                case 12:
                    exitProgram();
                    break;
                default:
                    cout << "Invalid choice. Please try again." << endl;
            }
        }

        
    } 
    else if (userType == 2) {
    int choice;
    while (true) {
        cout << "\nStudent Menu:" << endl;
        cout << "1. Academics" << endl;
        cout << "2. Clubs and Chapters" << endl;
        cout << "3. Exit" << endl;
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                int academicChoice;
                cout << "\nAcademics Menu:" << endl;
                cout << "1. Generate Report Card" << endl;
                cout << "2. Topper List" << endl;
                cout << "3. Find Student by Name" << endl;
                cout << "4. Find Student by Course" << endl;
                cout << "5. Calculate Pass Percentage" << endl;
                cout << "6. Calculate Fail Percentage" << endl;
                cout << "7. Highest Marks" << endl;
                cout << "8. Lowest Marks" << endl;
                cout << "9. Go back to Student Menu" << endl;
                cout << "10. Exit" << endl;
                cout << "Enter your choice: ";
                cin >> academicChoice;

                switch (academicChoice) {
                    case 1:
                        generateReportCard();
                        break;
                    case 2:
                        topperList();
                        break;
                    case 3:
                        findStudentByName();
                        break;
                    case 4:
                        findStudentByCourse();
                        break;
                    case 5:
                        calculatePassPercentage();
                        break;
                    case 6:
                        calculateFailPercentage();
                        break;
                    case 7:
                        highestMarks();
                        break;
                    case 8:
                        lowestMarks();
                        break;
                    case 9:
                        break; 
                    case 10:
                        exitProgram();
                        break;
                    default:
                        cout << "Invalid choice. Please try again." << endl;
                }
                break;
            case 2:
                int clubChoice;
                cout << "\nClubs and Chapters Menu:" << endl;
                cout << "1. Join Club" << endl;
                cout << "2. Leave Club" << endl;
                cout << "3. View Clubs" << endl;
                cout << "4. View Members" << endl;
                cout << "5. View Your Joined Clubs" << endl;
                cout << "6. Go back to Student Menu" << endl;
                cout << "7. Exit" << endl;
                cout << "Enter your choice: ";
                cin >> clubChoice;

                switch (clubChoice) {
                    case 1:
                        joinClub();
                        break;
                    case 2:
                        leaveClub();
                        break;
                    case 3:
                        viewClubs();
                        break;
                    case 4:
                        viewMembers();
                        break;
                    case 5:
                        int rollNumber;
                    cout << "Enter your roll number: ";
                    cin >> rollNumber;
                    showYourJoinedClubs(rollNumber);
                    break;
                    case 6:
                        break; 
                    case 7:
                        exitProgram();
                        break;
                    default:
                        cout << "Invalid choice. Please try again." << endl;
                }
                break;
            case 3:
                exitProgram();
                break;
            default:
                cout << "Invalid choice. Please try again." << endl;
        }
    }
}


    return 0;

}
void showYourJoinedClubs(int rollNumber) {
    bool found = false;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].rollNumber == rollNumber) {
            found = true;
            if (students[i].numClubs == 0) {
                cout << "You have not joined any clubs yet!" << endl;
            } else {
                cout << "Clubs you have joined:" << endl;
                for (int j = 0; j < students[i].numClubs; j++) {
                    cout << students[i].clubs[j] << endl;
                }
            }
            break;
        }
    }
    if (!found) {
        cout << "Student not found!" << endl;
    }
}
void viewClubs() {
    cout << "List of available clubs:" << endl;
    for (int i = 0; i < numClubs; i++) {
        cout << i+1 << ". " << clubs[i].name << endl;
    }
}

void joinClub() {
    int rollNumber;
    cout << "Enter your roll number: ";
    cin >> rollNumber;
    bool found = false;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].rollNumber == rollNumber) {
            found = true;
            if (students[i].numClubs >= 2) {
                cout << "You have already joined the maximum number of clubs!" << endl;
                return;
            }
            viewClubs();
            cout << "Enter the number of the club you want to join: ";
            int clubNumber;
            cin >> clubNumber;
            if (clubNumber >= 1 && clubNumber <= numClubs) {
                Club& chosenClub = clubs[clubNumber - 1];
                if (chosenClub.numMembers >= 50) {
                    cout << "This club already has the maximum number of members!" << endl;
                    return;
                }
                chosenClub.members[chosenClub.numMembers] = students[i].name;
                chosenClub.numMembers++;
                students[i].clubs[students[i].numClubs] = chosenClub.name;
                students[i].numClubs++;
                cout << "Joined " << chosenClub.name << " successfully!" << endl;
                return;
            } else {
                cout << "Invalid club number!" << endl;
                return;
            }
        }
    }
    if (!found) {
        cout << "Student not found!" << endl;
    }
}


void leaveClub() {
    int rollNumber;
    cout << "Enter your roll number: ";
    cin >> rollNumber;
    bool found = false;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].rollNumber == rollNumber) {
            found = true;
            if (students[i].numClubs == 0) {
                cout << "You are not a member of any club!" << endl;
                return;
            }
            cout << "Your current clubs:" << endl;
            for (int j = 0; j < students[i].numClubs; j++) {
                cout << j + 1 << ". " << students[i].clubs[j] << endl;
            }
            cout << "Enter the number of the club you want to leave: ";
            int clubNumber;
            cin >> clubNumber;
            if (clubNumber >= 1 && clubNumber <= students[i].numClubs) {
                string clubName = students[i].clubs[clubNumber - 1];
                for (int j = 0; j < numClubs; j++) {
                    if (clubs[j].name == clubName) {
                        for (int k = 0; k < clubs[j].numMembers; k++) {
                            if (clubs[j].members[k] == students[i].name) {
                                for (int l = k; l < clubs[j].numMembers - 1; l++) {
                                    clubs[j].members[l] = clubs[j].members[l + 1];
                                }
                                clubs[j].numMembers--;
                                break;
                            }
                        }
                        break;
                    }
                }
                for (int j = clubNumber - 1; j < students[i].numClubs - 1; j++) {
                    students[i].clubs[j] = students[i].clubs[j + 1];
                }
                students[i].numClubs--;
                cout << "Left the club successfully!" << endl;
                return;
            } else {
                cout << "Invalid club number!" << endl;
                return;
            }
        }
    }
    if (!found) {
        cout << "Student not found!" << endl;
    }
}

void viewMembers() {
    int clubNumber;
    cout << "Enter the number of the club to view its members: ";
    cin >> clubNumber;
    if (clubNumber >= 1 && clubNumber <= numClubs) {
        cout << "Members of " << clubs[clubNumber - 1].name << " club:" << endl;
        for (int i = 0; i < clubs[clubNumber - 1].numMembers; i++) {
            cout << i + 1 << ". " << clubs[clubNumber - 1].members[i] << endl;
        }
    } else {
        cout << "Invalid club number!" << endl;
    }
}

void addStudent() {
    if (numStudents < MAX_STUDENTS) {
        cout << "Enter student name: ";
        cin.ignore();
        getline(cin, students[numStudents].name);
        cout << "Enter roll number: ";
        cin >> students[numStudents].rollNumber;
        cout << "Enter course: ";
        cin.ignore();
        getline(cin, students[numStudents].course);
        cout << "Enter marks: ";
        cin >> students[numStudents].marks;
        numStudents++;
        cout << "Student added successfully!" << endl;
    } else {
        cout << "Maximum number of students reached!" << endl;
    }
}

void deleteStudent() {
    int rollNumber;
    cout << "Enter roll number to delete: ";
    cin >> rollNumber;
    bool found = false;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].rollNumber == rollNumber) {
            found = true;
            for (int j = i; j < numStudents - 1; j++) {
                students[j] = students[j + 1];
            }
            numStudents--;
            cout << "Student deleted successfully!" << endl;
            break;
        }
    }
    if (!found) {
        cout << "Student not found!" << endl;
    }
}

void searchStudent() {
    int rollNumber;
    cout << "Enter roll number to search: ";
    cin >> rollNumber;
    bool found = false;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].rollNumber == rollNumber) {
            found = true;
            cout << "Student found!" << endl;
            cout << "Name: " << students[i].name << endl;
            cout << "Roll Number: " << students[i].rollNumber << endl;
            cout << "Course: " << students[i].course << endl;
            cout << "Marks: " << students[i].marks << endl;
            break;
        }
    }
    if (!found) {
        cout << "Student not found!" << endl;
    }
}

void updateStudent() {
    int rollNumber;
    cout << "Enter roll number to update: ";
    cin >> rollNumber;
    bool found = false;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].rollNumber == rollNumber) {
            found = true;
            cout << "Enter new name: ";
            cin.ignore();
            getline(cin, students[i].name);
            cout << "Enter new course: ";
            getline(cin, students[i].course);
            cout << "Enter new marks: ";
            cin >> students[i].marks;
            cout << "Student updated successfully!" << endl;
            break;
        }
    }
    if (!found) {
        cout << "Student not found!" << endl;
    }
}

void displayAllStudents() {
    cout << "List of students:" << endl;
    for (int i = 0; i < numStudents; i++) {
        cout << "Name: " << students[i].name << endl;
        cout << "Roll Number: " << students[i].rollNumber << endl;
        cout << "Course: " << students[i].course << endl;
        cout << "Marks: " << students[i].marks << endl;
        cout << endl;
    }
}

void sortStudentsByRollNumber() {
    cout << "Sorting students by roll number..." << endl;
    for (int i = 0; i < numStudents - 1; i++) {
        for (int j = 0; j < numStudents - i - 1; j++) {
            if (students[j].rollNumber > students[j + 1].rollNumber) {
                Student temp = students[j];
                students[j] = students[j + 1];
                students[j + 1] = temp;
            }
        }
    }
    cout << "Students sorted successfully!" << endl;
}

void gradeCalculation() {
    cout << "Calculating grades..." << endl;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].marks >= 90) {
            cout << "Student " << students[i].name << " has got S grade." << endl;}
        else if (students[i].marks >= 80) {
            cout << "Student " << students[i].name << " has got A grade." << endl;
        } else if (students[i].marks >= 60) {
            cout << "Student " << students[i].name << " has got B grade." << endl;
        } else if (students[i].marks >= 40) {
            cout << "Student " << students[i].name << " has got C grade." << endl;
        } else {
            cout << "Student " << students[i].name << " has got F grade." << endl;
        }
    }
}

void markEntry() {
    int rollNumber;
    cout << "Enter roll number to enter marks: ";
    cin >> rollNumber;
    bool found = false;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].rollNumber == rollNumber) {
            found = true;
            cout << "Enter marks: ";
            cin >> students[i].marks;
            cout << "Marks entered successfully!" << endl;
            break;
        }
    }
    if (!found) {
        cout << "Student not found!" << endl;
    }
}

void generateReportCard() {
    int rollNumber;
    cout << "Enter roll number to generate report card: ";
    cin >> rollNumber;
    bool found = false;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].rollNumber == rollNumber) {
            found = true;
            cout << "Report Card:" << endl;
            cout << "Name: " << students[i].name << endl;
            cout << "Roll Number: " << students[i].rollNumber << endl;
            cout << "Course: " << students[i].course << endl;
            cout << "Marks: " << students[i].marks << endl;
            if (students[i].marks >= 90) {
                cout << "Grade: S" << endl;}
            else if (students[i].marks >= 80) {
                cout << "Grade: A" << endl;
            } else if (students[i].marks >= 60) {
                cout << "Grade: B" << endl;
            } else if (students[i].marks >= 40) {
                cout << "Grade: C" << endl;
            } else {
                cout << "Grade: F" << endl;
            }
            break;
        }
    }
    if (!found) {
        cout << "Student not found!" << endl;
    }
}

void studentCount() {
    cout << "Total number of students: " << numStudents << endl;
}

void averageMarks() {
    float sum = 0;
    for (int i = 0; i < numStudents; i++) {
        sum += students[i].marks;
    }
    cout << "Average marks: " << sum / numStudents << endl;
}

void topperList() {
    cout << "Topper list:" << endl;
    for (int i = 0; i < numStudents - 1; i++) {
        for (int j = 0; j < numStudents - i - 1; j++) {
            if (students[j].marks < students[j + 1].marks) {
                Student temp = students[j];
                students[j] = students[j + 1];
                students[j + 1] = temp;
            }
        }
    }
    int top = min(3, numStudents);
    for (int i = 0; i < top; i++) {
        cout << "Name: " << students[i].name << endl;
        cout << "Roll Number: " << students[i].rollNumber << endl;
        cout << "Course: " << students[i].course << endl;
        cout << "Marks: " << students[i].marks << endl;
        cout << endl;
    }
}

void exitProgram() {
    cout << "Exiting program..." << endl;
    exit(0);
}

void findStudentByName() {
    string name;
    cout << "Enter student name to search: ";
    cin.ignore();
    getline(cin, name);
    bool found = false;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].name == name) {
            found = true;
            cout << "Student found!" << endl;
            cout << "Name: " << students[i].name << endl;
            cout << "Roll Number: " << students[i].rollNumber << endl;
            cout << "Course: " << students[i].course << endl;
            cout << "Marks: " << students[i].marks << endl;
            break;
        }
    }
    if (!found) {
        cout << "Student not found!" << endl;
    }
}

void findStudentByCourse() {
    string course;
    cout << "Enter course to search: ";
    cin.ignore();
    getline(cin, course);
    bool found = false;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].course == course) {
            found = true;
            cout << "Student found!" << endl;
            cout << "Name: " << students[i].name << endl;
            cout << "Roll Number: " << students[i].rollNumber << endl;
            cout << "Course: " << students[i].course << endl;
            cout << "Marks: " << students[i].marks << endl;
            cout << endl;
        }
    }
    if (!found) {
        cout << "No students found in the given course!" << endl;
    }
}

void calculatePassPercentage() {
    int passCount = 0;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].marks >= 40) {
            passCount++;
        }
    }
    float passPercentage = (static_cast<float>(passCount) / numStudents) * 100;
    cout << "Pass Percentage: " << passPercentage << "%" << endl;
}

void calculateFailPercentage() {
    int failCount = 0;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].marks < 40) {
            failCount++;
        }
    }
    float failPercentage = (static_cast<float>(failCount) / numStudents) * 100;
    cout << "Fail Percentage: " << failPercentage << "%" << endl;
}

void highestMarks() {
    float maxMarks = -1;
    int index = -1;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].marks > maxMarks) {
            maxMarks = students[i].marks;
            index = i;
        }
    }
    cout << "Student with highest marks:" << endl;
    cout << "Name: " << students[index].name << endl;
    cout << "Roll Number: " << students[index].rollNumber << endl;
    cout << "Course: " << students[index].course << endl;
    cout << "Marks: " << students[index].marks << endl;
}

void lowestMarks() {
    float minMarks = 101;
    int index = -1;
    for (int i = 0; i < numStudents; i++) {
        if (students[i].marks < minMarks) {
            minMarks = students[i].marks;
            index = i;
        }
    }
    cout << "Student with lowest marks:" << endl;
    cout << "Name: " << students[index].name << endl;
    cout << "Roll Number: " << students[index].rollNumber << endl;
    cout << "Course: " << students[index].course << endl;
    cout << "Marks: " << students[index].marks << endl;
}
