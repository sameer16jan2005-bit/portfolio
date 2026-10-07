import java.util.Scanner;

class large
{ 
	static int largest(int a , int b , int c)
	{
		if( a>b && a>c )
		{
			System.out.println("Largest no. is : "+ a);
		}
		else if ( b>a && b>c)
		{
			System.out.println("Largest no. is : "+ b);
		}
		else
		{
			System.out.println("Largest no. is : "+ c);
		
		}
		return 0 ;
	}
	
		public static void main(String args[])
		{
			Scanner sc= new Scanner(System.in);
			int a, b, c;
			a=sc.nextInt();
			b=sc.nextInt();
			c=sc.nextInt();
			largest(a,b,c);
		
		}
	}