import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserDataTable } from '@/components/users/table/user-data-table';
import { columns } from '@/components/users/table/user-data-table-columns';
import { db } from '@/core/client/client';
import { language } from '@/resource/language/language';


const UserListPage = async () => {
  const data = await db.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  
  return (
    <section>
      <Card className={"m-2"}>
        <CardHeader>
          <CardTitle>{language.USER_MANAGEMENT}</CardTitle>
          <CardDescription>{language.USER_MANAGEMENT_DESC}</CardDescription>
        </CardHeader>
        <CardContent className={"p-2 md:p-5 h-[80vh] overflow-y-auto"}>
          <UserDataTable
            data={data}
            columns={columns}
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default UserListPage;
