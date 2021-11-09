#include <iostream>
#include <math.h>

using namespace std;

class calculator{
    public:
    double 15per = 0.15;
    double 18per = 0.18;
    double 20per = 0.20;
    double 25per = 0.25;
    double 30per = 0.30;
    string tips = 0;
    double custom = 0; 
    // double tax = 0.08875;
    double total = 0;
    double totalWtips = 0;
    double eachPerson = 0;
}

void calculator::get_Data()
{
    cout << "Enter the Total cost: ";
    cin >> total; 
    cout << "Select the tip percentage or enter the custom amount: 
            15%\t18%\t20%\t25%\nCustom: ";
    cin >> tips;
    if (tips == "15" || tips == "15%")
        tips == 15per;
    else if (tips == "18" || tips == "18%")
        tips == 18per;
    else if (tips == "20" || tips == "20%")
        tips == 20per;
    else if (tips == "25" || tips == "25%")
        tips == 25per;
    else if (tips == "30" || tips == "30%")
        tips == 30per;
    else 
        tips == custom;
}

void calculator::printOut()
{
    cout << "Total: " << totalWtips;
    cout << "Each person: " << eachPerson;
}

static double calculator::result(double price, double percent)
{
    


}

int main(int argc, char const *argv[])
{
    result(total, tips);
    printOut();
    return 0;
}

