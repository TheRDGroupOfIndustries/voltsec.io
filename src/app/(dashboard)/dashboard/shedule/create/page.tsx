import { CreatePentest } from '@/components/createPentest';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { language } from '@/resource/language/language';


const CreatePage = () => {
  return (
    <section>
      <Card className={'m-2'}>
        <CardHeader>
          <CardTitle>{language.USER_MANAGEMENT}</CardTitle>
          <CardDescription>{language.USER_MANAGEMENT_DESC}</CardDescription>
        </CardHeader>
        <CardContent className='p-2 md:p-5 h-[80vh] overflow-y-auto max-w-3xl mx-auto'>
          <CreatePentest />
        </CardContent>
      </Card>
    </section>
  );
};

export default CreatePage;
