#include <stdio.h>


int input() {
    int a;
    scanf("%d", &a);
    return a;
}



int greater(int x[], int y) {
    int j;
    int str = 0;
    for(j=0;j<y;j++) {
        
        if(x[j]>=str) {
            str = x[j];
        }      
        else {
            continue;      
        }      
    }
    return str;
}


void Output(int O) {
    printf(" The greatest is %d", O);
}



int main() {
    printf("Enter the number of numbers you want to compare\n");
    int i = input();
    int g;
    int ar[i];
    printf(" Enter the numbers for the array\n");
    for (g=0;g<i;g++) {
        ar[g] =input();   
    }   
    int Ou = greater(ar, i);
    Output(Ou);
}