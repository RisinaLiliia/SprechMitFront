import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FormField from "./FormField";

export default function AuthForm({
  title,
  description,
  initialValues,
  validationSchema,
  fields,
  onSubmit,
  submitText,
  alternativeText,
  alternativeLink,
  alternativeLinkText,
}) {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card className="w-full max-w-md rounded-2xl shadow-lg">
          <CardHeader className="text-center mb-6">
            <CardTitle className="text-2xl font-bold text-foreground">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4">
                  {fields.map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.2 }}
                    >
                      <FormField {...field} />
                    </motion.div>
                  ))}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4"
                  >
                    {isSubmitting ? "Processing..." : submitText}
                  </Button>

                  <p className="text-center text-sm mt-3 text-muted-foreground">
                    {alternativeText}{" "}
                    <Link
                      to={alternativeLink}
                      className="text-primary hover:underline"
                    >
                      {alternativeLinkText}
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
