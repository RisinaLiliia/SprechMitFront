import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
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
  switchTab,
  alternativeText,
  alternativeLinkText,
}) {
  return (
    <div className="flex justify-center items-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <Card className="w-full rounded-2xl shadow-md p-1 flex flex-col">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-foreground font-heading -mt-1 sm:text-xl md:text-2xl">
              {title}
            </CardTitle>

            <CardDescription className="text-foreground/70 mt-1 mb-1 text-base leading-relaxed sm:text-sm md:text-base">
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
                <Form className="flex flex-col gap-2">
                  {fields.map((field) => (
                    <FormField key={field.name} {...field} />
                  ))}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 mt-2 rounded-xl bg-forest text-linen font-semibold hover:bg-forest/90 transition"
                  >
                    {isSubmitting ? <Loader text="Senden..." /> : submitText}
                  </Button>

                  {switchTab && (
                    <div className="text-center mt-2">
                      <button
                        type="button"
                        onClick={switchTab}
                        className="text-sm text-charcoal font-medium focus:outline-none"
                      >
                        {alternativeText}{" "}
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-clay hover:text-forest focus:text-forest transition-colors duration-200 ease-in-out"
                        >
                          {alternativeLinkText}
                        </motion.span>
                      </button>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
