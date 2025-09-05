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
import Loader from "../../shared/Loader/Loader";

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
    <div className="flex justify-center items-center min-h-screen px-4 bg-background font-main">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="w-full border border-darkGray rounded-none shadow-none">
          <CardHeader className="text-center mb-4">
            <CardTitle className="text-3xl font-extrabold uppercase tracking-tight text-darkGray font-heading">
              {title}
            </CardTitle>
            <CardDescription className="text-darkGray mt-2 mb-4">
              {description}
            </CardDescription>

            <div className="flex justify-center gap-2 mt-4">
              <span className="w-10 h-1 bg-red" />
              <span className="w-10 h-1 bg-yellow" />
              <span className="w-10 h-1 bg-darkGray" />
            </div>
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
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <FormField {...field} />
                    </motion.div>
                  ))}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 bg-green text-offWhite rounded-none font-bold uppercase tracking-wide hover:bg-yellow hover:text-darkGray transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? <Loader text="Senden..." /> : submitText}
                  </Button>

                  <p className="text-center text-sm mt-3 mb-6 text-darkGray">
                    {alternativeText}{" "}
                    <Link
                      to={alternativeLink}
                      className="text-green hover:text-darkGray hover:underline transition-colors"
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
